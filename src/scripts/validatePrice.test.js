import validatePrice from "./validatePrice";

it("Testing item price - when price is > 0", () => {
    //Arrange
    const testPrice = "1";
    //Act
    const result = validatePrice(testPrice);
    //assert
    expect(result.data).toBe(1);
    expect(result.error).toBe("");
});

it("Testing item price - when price is 0", () => {
    //Arrange
    const testPrice = "0";
    //Act
    const result = validatePrice(testPrice);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price is < 0", () => {
    //Arrange
    const testPrice = "-1";
    //Act
    const result = validatePrice(testPrice);
    //assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price is an empty", () => {
    //Arrange
    const testPrice = "";
    //act
    const result = validatePrice(testPrice);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price has string value", () => {
    //Arrange
    const testPrice = "ten";
    //Act
    const result = validatePrice(testPrice);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});

it("Testing item price - when price has mix of number and string value", () => {
    //Arrange
    const testPrice = "10ten";
    //Act
    const result = validatePrice(testPrice);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The price must cost more than 0");
});