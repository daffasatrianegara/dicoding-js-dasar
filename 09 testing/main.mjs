import { sumValue as add, subsValue as less } from "./calculator.mjs";
import { describe, it } from "node:test";
import assert from "node:assert";

describe("Calculator", () => {
  it("should add correctly", () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it("should less correctly", () => {
    const operandA = 5
    const operandB = 3

    const actualValue = less(operandA, operandB)
    const expectedValue = actualValue
    assert.equal(actualValue, expectedValue);
  })

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = "5";
      const operandB = 4;

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });

  it("should throw an error if string passed on numB parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = "8";

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });
});
