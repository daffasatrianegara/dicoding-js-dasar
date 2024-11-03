import { describe, it } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("Sum number", () => {
  it("Should add number correctly", () => {
    const num1 = 5;
    const num2 = 10;

    const actualValue = sum(num1, num2);
    const expectedValue = 15;

    assert.equal(actualValue, expectedValue);
  });

  it("Should return data with type Number/Int", () => {
    const num1 = 10;
    const num2 = 15;

    const actualValue = sum(num1, num2);
    const expectedValue = typeof 25;

    assert.equal(typeof actualValue, expectedValue);
  });
});
