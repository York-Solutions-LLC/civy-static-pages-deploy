export type Operator = "+" | "-" | "x" | "÷";

export const calculate = (
  left: number,
  right: number,
  operator: Operator
): number => {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "x":
      return left * right;
    case "÷":
      if (right === 0) return 0;
      return left / right;
    default: {
      // Exhaustiveness check - should never reach here
      const _exhaustive: never = operator;
      throw new Error(`Unhandled operator: ${String(_exhaustive)}`);
    }
  }
};
