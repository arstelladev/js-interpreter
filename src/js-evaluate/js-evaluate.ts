const acorn = require("acorn");
const walk = require("acorn-walk");

export class JSEvaluator {
  private node;
  constructor(expression: string) {
    this.node = acorn.parse(expression, { ecmaVersion: 2020 });
  }
  evaluate(env: { [key: string]: any }) {
    const res = this._evaluate(this.node, env);
    if (Array.isArray(res)) {
      return res[res.length - 1];
    } else {
      return res;
    }
  }
  private _evaluate(node, env): any {
    switch (node.type) {
      case "Program":
        return node.body.map((snode) => this._evaluate(snode, env));
      case "ExpressionStatement":
        return this._evaluate(node.expression, env);
      case "LogicalExpression":
        return this._logicalExpression(node, env);
      case "BinaryExpression":
        return this._binaryExpression(node, env);
      case "MemberExpression":
        return this._memberExpression(node, env);
      case "Identifier":
        return this._identifier(node, env);
      case "Literal":
        return this._literal(node, env);
    }
  }
  private _logicalExpression(node, env) {
    const left = this._evaluate(node.left, env);
    const right = this._evaluate(node.right, env);
    switch (node.operator) {
      case "&": {
        return left & right;
      }
      case "|": {
        return left | right;
      }
      case "&&": {
        return left && right;
      }
      case "||": {
        return left || right;
      }
      case "==": {
        return left == right;
      }
      case "===": {
        return left === right;
      }
      case "!=": {
        return left != right;
      }
      case "!==": {
        return left !== right;
      }
    }
  }
  private _binaryExpression(node, env) {
    const left = this._evaluate(node.left, env);
    const right = this._evaluate(node.right, env);
    switch (node.operator) {
      case "+": {
        return left + right;
      }
      case "-": {
        return left - right;
      }
      case "*": {
        return left * right;
      }
      case "/": {
        return left / right;
      }
      case "&": {
        return left & right;
      }
      case "|": {
        return left | right;
      }
      case "&&": {
        return left && right;
      }
      case "||": {
        return left || right;
      }
      case "==": {
        return left == right;
      }
      case "===": {
        return left === right;
      }
      case "!=": {
        return left != right;
      }
      case "!==": {
        return left !== right;
      }
    }
  }
  private _memberExpression(node, env) {
    const obj = this._evaluate(node.object, env);
    return obj[node.property.name];
  }
  private _identifier(node, env) {
    return env[node.name];
  }
  private _literal(node, env) {
    return node.value;
  }
}
