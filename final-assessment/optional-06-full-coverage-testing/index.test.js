import { describe, it } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("Calculate sum number", () => {
    it("should add number correctly", () => {
        const num1 = 10
        const num2 = 10

        const actualValue = sum(num1, num2)
        const expectedValue = 20

        assert.equal(actualValue, expectedValue)
    })

    it("should return 0 as a value if string passed on num1 or num2 parameter", () => {
        const num1 = "10"
        const num2 = 1

        const actualValue = sum(num1, num2)
        const expectedValue = 0

        assert.equal(actualValue, expectedValue)
    })

    it("should return 0 as a value if num1 or num2 are negative number", () => {
        const num1 = 1
        const num2 = -10

        const actualValue = sum(num1, num2)
        const expectedValue = 0

        assert.equal(actualValue, expectedValue)
    })

    it("should throw an error if parameter num1 or num2 are string", () => {
        const throwError = () => {
            const num1 = 10
            const num2 = "2"

            const addNumber = sum(num1, num2)
            if(addNumber === 0) {
                throw new Error("can't sum string value...")
            }
        }

        assert.throws(throwError, Error)
    })

    it("should throw an error if num1 or num2 parameter are negative value", () => {
        const throwError = () => {
            const num1 = -10
            const num2 = 2

            const addNumber = sum(num1, num2)
            if(addNumber === 0) {
                throw new Error("can't sum negative value...")
            }
        }

        assert.throws(throwError, Error)
    })
})