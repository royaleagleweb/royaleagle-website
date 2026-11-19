// Rewrites raw HTML <head> for indexable /service, /case, and /legal slugs.
// Every other request, including unknown slugs, is the static asset response.

import siteDataSource from "./site-data.jsx";
import "./detail-seo.js";
import { extractConstArray } from "./site-data-parse.js";

if (typeof siteDataSource !== "string") {
  throw new Error("site-data.jsx must be imported as text");
}
if (typeof globalThis.resolveDetailRequest !== "function") {
  throw new Error("detail-seo.js did not register resolveDetailRequest");
}

const SERVICES = extractConstArray(siteDataSource, "SERVICES");
const CASE_STUDIES = extractConstArray(siteDataSource, "CASE_STUDIES");

const STALE_HEADERS = [
  "content-length",
  "etag",
  "content-md5",
  "digest",
  "content-digest",
  "repr-digest",
];

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function rewriteDetailHead(response, head) {
  const headers = new Headers(response.headers);
  for (const name of STALE_HEADERS) headers.delete(name);

  const state = {
    sawTitle: false,
    sawDescription: false,
    sawCanonical: false,
    sawOgTitle: false,
    sawOgDescription: false,
    sawOgUrl: false,
    sawTwitterTitle: false,
    sawTwitterDescription: false,
  };

  return new HTMLRewriter()
    .on("head > title", {
      element(element) {
        state.sawTitle = true;
        element.setInnerContent(head.title);
      },
    })
    .on("head > meta", {
      element(element) {
        const name = (element.getAttribute("name") || "").toLowerCase();
        const property = (element.getAttribute("property") || "").toLowerCase();
        if (name === "description") {
          state.sawDescription = true;
          element.setAttribute("content", head.description);
        } else if (property === "og:description") {
          state.sawOgDescription = true;
          element.setAttribute("content", head.description);
        } else if (name === "twitter:description") {
          state.sawTwitterDescription = true;
          element.setAttribute("content", head.description);
        } else if (property === "og:title") {
          state.sawOgTitle = true;
          element.setAttribute("content", head.title);
        } else if (name === "twitter:title") {
          state.sawTwitterTitle = true;
          element.setAttribute("content", head.title);
        } else if (property === "og:url") {
          state.sawOgUrl = true;
          element.setAttribute("content", head.canonical);
        }
      },
    })
    .on("head > link", {
      element(element) {
        const rel = (element.getAttribute("rel") || "").toLowerCase().split(/\s+/);
        if (!rel.includes("canonical")) return;
        state.sawCanonical = true;
        element.setAttribute("href", head.canonical);
      },
    })
    .on("head", {
      element(element) {
        element.onEndTag((end) => {
          const canonical = escapeAttr(head.canonical);
          const title = escapeAttr(head.title);
          const description = escapeAttr(head.description);
          let extra = "";
          if (!state.sawTitle) extra += `<title>${title}</title>`;
          if (!state.sawDescription) extra += `<meta name="description" content="${description}"/>`;
          if (!state.sawCanonical) extra += `<link rel="canonical" href="${canonical}"/>`;
          if (!state.sawOgTitle) extra += `<meta property="og:title" content="${title}"/>`;
          if (!state.sawOgDescription) extra += `<meta property="og:description" content="${description}"/>`;
          if (!state.sawOgUrl) extra += `<meta property="og:url" content="${canonical}"/>`;
          if (!state.sawTwitterTitle) extra += `<meta name="twitter:title" content="${title}"/>`;
          if (!state.sawTwitterDescription) extra += `<meta name="twitter:description" content="${description}"/>`;
          if (extra) end.before(extra, { html: true });
        });
      },
    })
    .transform(new Response(response.body, { status: response.status, headers }));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const kind = globalThis.detailKind(url.pathname);
    if (!kind || (request.method !== "GET" && request.method !== "HEAD")) {
      return env.ASSETS.fetch(request);
    }

    const head = globalThis.resolveDetailRequest(
      kind,
      url.searchParams.get("s") || "",
      SERVICES,
      CASE_STUDIES,
    );
    const asset = await env.ASSETS.fetch(request);
    if (!head || !asset.body) return asset;

    const contentType = asset.headers.get("content-type") || "";
    if (asset.status !== 200 || !/^text\/html\b/i.test(contentType)) return asset;
    if (asset.headers.has("content-encoding")) return asset;

    return rewriteDetailHead(asset, head);
  },
};
