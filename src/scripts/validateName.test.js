import validateName from "./validateName";

const testList = [
    {
        id: 0,
        name: "Chair",
        price: "500",
        isCompleted: false,
    },
    {
        id: 1,
        name: "Sofa",
        price: "100",
        isCompleted: false,
    },
    {
        id: 2,
        name: "Bed",
        price: "400",
        isCompleted: false,
    }
];

it("Testing to validate Item Name with valid product name", () => {
    //Arrange
    const testName = "Lamp";
    //act
    const result = validateName(testName, testList);
    //assert
    expect(result.data).toBe("Lamp");
    expect(result.error).toBe("");
});



it("Testing to validate Item Name with mix of string and number value", () => {
    //Arrange
    const testName = "100Lamp";
    //act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("100Lamp");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name containing space in middle", () => {
    //Arrange
    const testName = "Sofa bed";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name starting with space", () => {
    //Arrange
    const testName = " Sofa bed";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name ending with space", () => {
    //Arrange
    const testName = "Sofa bed ";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name that has space at start and end", () => {
   //Arrange
    const testName = " Sofa bed ";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name without product name", () => {
    //Arrange
    const testName = "";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The product name must not be empty");
});

it("Testing to validate Item Name with empty spaces", () => {
    //Arrange
    const testName = " ";
    //Act
    const result = validateName(testName,testList);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("The product name must not be empty");
});

it("Testing duplicate product name", () => {
    //Arrange
    const testName = "Sofa";
    //Act
    const result = validateName(testName, testList);
    //Assert
    expect(result.data).toBe("");
    expect(result.error).toBe("Duplicate Product name");
});