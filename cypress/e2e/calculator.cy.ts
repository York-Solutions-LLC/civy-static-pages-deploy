const clickButtons = (...buttons: string[]) => {
  buttons.forEach((label) => {
    cy.contains("button", label).click();
  });
};

describe("Calculator UI", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  const display = () => cy.get(".display");

  it("clears the display and performs addition", () => {
    clickButtons("C");
    display().should("have.text", "0");

    clickButtons("1", "0", "+", "6", "=");
    display().should("have.text", "16");
  });

  it("handles subtraction and chained operations", () => {
    clickButtons("9", "-", "4", "=");
    display().should("have.text", "5");

    clickButtons("+", "3", "=");
    display().should("have.text", "8");
  });

  it("supports multiplication and division", () => {
    clickButtons("2", "x", "3", "=");
    display().should("have.text", "6");

    clickButtons("÷", "2", "=");
    display().should("have.text", "3");
  });
});
