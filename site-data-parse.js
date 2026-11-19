// Pull SERVICES and CASE_STUDIES out of site-data.jsx without executing it.
// The file is a browser script (it touches `window` and is not an ES module).

import { parse } from "acorn";

export function extractConstArray(source, name) {
  const ast = parse(source, { ecmaVersion: "latest", sourceType: "script" });
  for (const statement of ast.body) {
    if (statement.type !== "VariableDeclaration") continue;
    for (const declarator of statement.declarations) {
      if (declarator.id.type === "Identifier" && declarator.id.name === name) {
        return evalLiteral(declarator.init);
      }
    }
  }
  throw new Error(`site-data.jsx is missing const ${name}`);
}

function evalLiteral(node) {
  if (!node) throw new Error("site data initializer is missing");
  switch (node.type) {
    case "ArrayExpression":
      return node.elements.map((element) => {
        if (!element || element.type === "SpreadElement") {
          throw new Error("site data arrays must be literal values");
        }
        return evalLiteral(element);
      });
    case "ObjectExpression": {
      const object = {};
      for (const property of node.properties) {
        if (property.type !== "Property" || property.computed || property.kind !== "init") {
          throw new Error("unsupported property in site data");
        }
        let key = null;
        if (property.key.type === "Identifier") key = property.key.name;
        else if (property.key.type === "Literal") key = String(property.key.value);
        if (!key) throw new Error("unsupported key in site data");
        object[key] = evalLiteral(property.value);
      }
      return object;
    }
    case "Literal":
      return node.value;
    case "TemplateLiteral":
      if (node.expressions.length !== 0) {
        throw new Error("template expressions are not supported in site data");
      }
      return node.quasis.map((part) => part.value.cooked).join("");
    case "UnaryExpression":
      if (node.operator === "-" && node.argument.type === "Literal" && typeof node.argument.value === "number") {
        return -node.argument.value;
      }
      throw new Error(`unsupported unary ${node.operator} in site data`);
    default:
      throw new Error(`unsupported site data node ${node.type}`);
  }
}
