/**
 * Render the money-page React trees into each page's <div id="root">.
 *
 * The site has no deploy-time build. This script is the sync step: it evaluates
 * the same JSX the browser compiles, with the same React 18.3.1, and writes
 * renderToString output into the HTML files. mountPage() hydrates that markup.
 *
 *   cd scripts && npm install && node prerender.cjs
 *   node prerender.cjs --check
 */
"use strict";

process.env.NODE_ENV = "production";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const babel = require("@babel/core");
const React = require("react");
const { renderToString } = require("react-dom/server");
const { JSDOM } = require("jsdom");

const ROOT = path.resolve(__dirname, "..");
const CHECK = process.argv.includes("--check");

const LIBS = [
  "site-data.jsx",
  "site-cities.jsx",
  "shared.jsx",
  "lib-effects.jsx",
  "lib-seo.jsx",
  "lib-conversion.jsx",
  "lib-delicate.jsx",
];

const PAGES = [
  { html: "index.html", jsx: "page-home.jsx", component: "HomePage", url: "https://royaleagleweb.com/" },
  { html: "web-design.html", jsx: "page-web-design.jsx", component: "WebDesignPage", url: "https://royaleagleweb.com/web-design" },
  { html: "wordpress.html", jsx: "page-wordpress.jsx", component: "WordpressPage", url: "https://royaleagleweb.com/wordpress" },
  { html: "contractor-websites.html", jsx: "page-contractor-websites.jsx", component: "ContractorWebsitesPage", url: "https://royaleagleweb.com/contractor-websites" },
  { html: "yacht-websites.html", jsx: "page-yacht-websites.jsx", component: "YachtWebsitesPage", url: "https://royaleagleweb.com/yacht-websites" },
  { html: "locations.html", jsx: "page-locations.jsx", component: "LocationsPage", url: "https://royaleagleweb.com/locations" },
];

function transform(code, filename) {
  const out = babel.transformSync(code, {
    filename,
    babelrc: false,
    configFile: false,
    sourceType: "script",
    presets: [["@babel/preset-react", { runtime: "classic" }]],
  });
  return out.code;
}

function stripMount(code) {
  return code.replace(/\nmountPage\([\s\S]*?\);\s*$/, "\n");
}

function makeSandbox(url) {
  const dom = new JSDOM("<!doctype html><html><head></head><body></body></html>", { url });
  const sandbox = {
    console,
    setTimeout,
    clearTimeout,
    queueMicrotask,
    URL,
    URLSearchParams,
    Object,
    Array,
    JSON,
    Math,
    String,
    Number,
    Boolean,
    RegExp,
    Date,
    Map,
    Set,
    Promise,
    Symbol,
    Error,
    parseInt,
    parseFloat,
    isNaN,
    encodeURIComponent,
    decodeURIComponent,
    React,
    document: dom.window.document,
    navigator: dom.window.navigator,
    HTMLElement: dom.window.HTMLElement,
    SVGElement: dom.window.SVGElement,
    Node: dom.window.Node,
    Element: dom.window.Element,
    MutationObserver: dom.window.MutationObserver,
    getComputedStyle: dom.window.getComputedStyle.bind(dom.window),
    matchMedia() {
      return {
        matches: false,
        media: "",
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
      };
    },
    requestAnimationFrame(cb) {
      return setTimeout(cb, 0);
    },
    cancelAnimationFrame(id) {
      clearTimeout(id);
    },
  };
  sandbox.window = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.self = sandbox;
  sandbox.location = dom.window.location;
  vm.createContext(sandbox);
  return sandbox;
}

function run(sandbox, filename, code) {
  const script = new vm.Script(transform(code, filename), { filename });
  script.runInContext(sandbox);
}

function renderPage(page) {
  const sandbox = makeSandbox(page.url);
  for (const file of LIBS) {
    run(sandbox, file, fs.readFileSync(path.join(ROOT, file), "utf8"));
  }
  const pageSrc = stripMount(fs.readFileSync(path.join(ROOT, page.jsx), "utf8"));
  if (pageSrc.includes("mountPage(")) {
    throw new Error(`${page.jsx}: failed to strip mountPage()`);
  }
  run(sandbox, page.jsx, pageSrc);
  const Component = sandbox[page.component];
  if (typeof Component !== "function") {
    throw new Error(`${page.jsx}: ${page.component} was not defined`);
  }
  const html = renderToString(React.createElement(Component));
  if (!html.includes("<h1") || html.length < 500) {
    throw new Error(`${page.jsx}: render looks empty (${html.length} bytes)`);
  }
  if (/gohighlevel/i.test(html)) {
    throw new Error(`${page.jsx}: rendered HTML mentions GoHighLevel`);
  }
  const badHref = html.match(/href="[^"]*\.html[^"]*"/i);
  if (badHref) {
    throw new Error(`${page.jsx}: extensioned internal link ${badHref[0]}`);
  }
  return html;
}

function replaceRoot(fileHtml, inner) {
  const openRe = /<div id="root"(?: data-prerender="1")?>/;
  const open = openRe.exec(fileHtml);
  if (!open) throw new Error("missing <div id=\"root\">");
  const scriptAt = fileHtml.indexOf('<script src="https://unpkg.com/react@18', open.index);
  if (scriptAt < 0) throw new Error("missing React script after #root");
  const closeAt = fileHtml.lastIndexOf("</div>", scriptAt);
  if (closeAt < open.index) throw new Error("missing </div> for #root");
  const head = fileHtml.slice(0, fileHtml.indexOf("</head>") + "</head>".length);
  const next = fileHtml.slice(0, open.index) + `<div id="root" data-prerender="1">${inner}</div>` + fileHtml.slice(closeAt + "</div>".length);
  const nextHead = next.slice(0, next.indexOf("</head>") + "</head>".length);
  if (head !== nextHead) {
    throw new Error("head changed while replacing #root");
  }
  return next;
}

function visibleWords(html) {
  const body = html.match(/<body[\s\S]*<\/body>/i);
  let s = body ? body[0] : html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  s = s.replace(/<[^>]+>/g, " ");
  s = s.replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'");
  return s.split(/\s+/).filter(Boolean).length;
}

function main() {
  let failed = false;
  for (const page of PAGES) {
    const filePath = path.join(ROOT, page.html);
    const before = fs.readFileSync(filePath, "utf8");
    const inner = renderPage(page);
    const after = replaceRoot(before, inner);
    const words = visibleWords(after);
    if (CHECK) {
      if (before !== after) {
        console.error(`${page.html}: out of date (${words} body words). Re-run node scripts/prerender.cjs`);
        failed = true;
      } else {
        console.log(`${page.html}: in sync, ${words} body words`);
      }
    } else {
      fs.writeFileSync(filePath, after);
      console.log(`${page.html}: wrote ${inner.length} bytes, ${words} body words`);
    }
  }
  if (failed) process.exit(1);
}

main();
