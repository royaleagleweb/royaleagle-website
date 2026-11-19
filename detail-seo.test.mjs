import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";
import { extractConstArray } from "./site-data-parse.js";

await import("./detail-seo.js");

const source = readFileSync(new URL("./site-data.jsx", import.meta.url), "utf8");
const services = extractConstArray(source, "SERVICES");
const cases = extractConstArray(source, "CASE_STUDIES");

function quotedList(html, name) {
  const match = html.match(new RegExp(`var ${name}\\s*=\\s*\\[([^\\]]*)]`));
  assert.ok(match, `missing var ${name}`);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]);
}

function liveCollections() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: "site-data.jsx" });
  return sandbox.window;
}

test("parser matches the browser script's SERVICES and CASE_STUDIES", () => {
  // vm.runInContext objects use another realm's prototype, so compare JSON.
  const live = liveCollections();
  assert.equal(JSON.stringify(services), JSON.stringify(live.SERVICES));
  assert.equal(JSON.stringify(cases), JSON.stringify(live.CASE_STUDIES));
});

test("indexable slugs match the inline allowed lists and AI slugs stay excluded", () => {
  const serviceHtml = readFileSync(new URL("./service.html", import.meta.url), "utf8");
  const caseHtml = readFileSync(new URL("./case.html", import.meta.url), "utf8");
  const legalHtml = readFileSync(new URL("./legal.html", import.meta.url), "utf8");

  const indexable = services.filter((svc) => svc.index !== false).map((svc) => svc.slug);
  const hidden = services.filter((svc) => svc.index === false).map((svc) => svc.slug);
  assert.deepStrictEqual(quotedList(serviceHtml, "allowed").sort(), indexable.sort());
  assert.deepStrictEqual(quotedList(serviceHtml, "no").sort(), hidden.sort());
  assert.equal(services[0].slug, "website-builds");
  assert.equal(quotedList(serviceHtml, "allowed")[0], "website-builds");

  assert.deepStrictEqual(quotedList(caseHtml, "allowed"), cases.map((cs) => cs.slug));
  assert.equal(cases[0].slug, "doctor-yachts");

  assert.deepStrictEqual(quotedList(legalHtml, "allowed"), ["privacy", "terms", "accessibility"]);
});

test("nineteen indexable detail URLs get unique titles, descriptions, and canonicals", () => {
  const rows = [];
  for (const svc of services) {
    const head = globalThis.resolveDetailRequest("service", svc.slug, services, cases);
    if (svc.index === false) {
      assert.equal(head, null);
      continue;
    }
    rows.push(["/service?s=" + svc.slug, head]);
  }
  for (const cs of cases) {
    rows.push(["/case?s=" + cs.slug, globalThis.resolveDetailRequest("case", cs.slug, services, cases)]);
  }
  for (const slug of ["privacy", "terms", "accessibility"]) {
    rows.push(["/legal?s=" + slug, globalThis.resolveDetailRequest("legal", slug, services, cases)]);
  }

  assert.equal(rows.length, 19);
  const titles = new Set();
  const descriptions = new Set();
  const canonicals = new Set();
  for (const [path, head] of rows) {
    assert.ok(head, path);
    assert.equal(head.canonical, "https://royaleagleweb.com" + path);
    assert.match(head.canonical, /^https:\/\/royaleagleweb\.com\/(service|case|legal)\?s=[a-z0-9-]+$/);
    assert.match(head.title, /Royal Eagle/);
    assert.equal(head.description.includes("GoHighLevel"), false);
    assert.equal(head.title.includes("GoHighLevel"), false);
    if (!path.startsWith("/legal")) assert.match(head.title, / \| Royal Eagle$/);
    titles.add(head.title);
    descriptions.add(head.description);
    canonicals.add(head.canonical);
    if (path.startsWith("/case")) assert.ok(head.description.length <= 160, head.description);
  }
  assert.equal(titles.size, 19);
  assert.equal(descriptions.size, 19);
  assert.equal(canonicals.size, 19);
});

test("unknown, missing, and non-detail paths are left to the static page", () => {
  assert.equal(globalThis.resolveDetailRequest("service", "", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("service", "not-a-service", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("service", "Maintenance", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("service", "ai-websites", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("case", "", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("case", "missing", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("legal", "", services, cases), null);
  assert.equal(globalThis.resolveDetailRequest("legal", "cookies", services, cases), null);
  assert.equal(globalThis.detailKind("/services"), null);
  assert.equal(globalThis.detailKind("/case-studies"), null);
  assert.equal(globalThis.detailKind("/service.html"), null);
  assert.equal(globalThis.detailKind("/service"), "service");
  assert.equal(globalThis.detailKind("/service/"), "service");
  assert.equal(globalThis.detailKind("/case/"), "case");
  assert.equal(globalThis.detailKind("/legal/"), "legal");
});

test("client pages call the shared head helpers", () => {
  const servicePage = readFileSync(new URL("./page-service-detail.jsx", import.meta.url), "utf8");
  const casePage = readFileSync(new URL("./page-case-detail.jsx", import.meta.url), "utf8");
  const legalPage = readFileSync(new URL("./page-legal.jsx", import.meta.url), "utf8");
  assert.match(servicePage, /serviceDetailHead\(svc\)/);
  assert.match(casePage, /caseDetailHead\(cs\)/);
  assert.match(legalPage, /legalDetailHead\(canonicalSlug\)/);
  for (const file of ["service.html", "case.html", "legal.html"]) {
    const html = readFileSync(new URL("./" + file, import.meta.url), "utf8");
    assert.match(html, /src="\/detail-seo\.js"/);
  }
});
