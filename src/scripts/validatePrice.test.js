import validatePrice from "./validatePrice";

it("Testing item price - when price is > 0", () => {
    const testPrice = "1";
    const result = validatePrice(testPrice);
    expect(result.data).toBe(1);
    expect(result.error).toBe("");
});

it("Testing item price - when price is 0", () => {
    const testPrice = "0";
    const result = validatePrice(testPrice);
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price is < 0", () => {
    const testPrice = "-1";
    const result = validatePrice(testPrice);
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price is empty", () => {
    const testPrice = "";
    const result = validatePrice(testPrice);
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price has string value", () => {
    const testPrice = "ten";
    const result = validatePrice(testPrice);
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price has mix of number and string value", () => {
    const testPrice = "10ten";
    const result = validatePrice(testPrice);
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});