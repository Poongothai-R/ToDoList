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
    const testName = "Lamp";
    const result = validateName(testName, testList);
    expect(result.data).toBe("Lamp");
    expect(result.error).toBe("");
});



it("Testing to validate Item Name with mix of string and number value", () => {
    const testName = "100Lamp";
    const result = validateName(testName,testList);
    expect(result.data).toBe("100Lamp");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name containing space in middle", () => {
    const testName = "Sofa bed";
    const result = validateName(testName,testList);
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name starting with space", () => {
    const testName = " Sofa bed";
    const result = validateName(testName,testList);
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name ending with space", () => {
    const testName = "Sofa bed ";
    const result = validateName(testName,testList);
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name with valid product name that has space at start and end", () => {
    const testName = " Sofa bed ";
    const result = validateName(testName,testList);
    expect(result.data).toBe("Sofa bed");
    expect(result.error).toBe("");
});

it("Testing to validate Item Name without product name", () => {
    const testName = "";
    const result = validateName(testName,testList);
    expect(result.data).toBe("");
    expect(result.error).toBe("The product name must not be empty");
});

it("Testing to validate Item Name with empty spaces", () => {
    const testName = " ";
    const result = validateName(testName,testList);
    expect(result.data).toBe("");
    expect(result.error).toBe("The product name must not be empty");
});

it("Testing duplicate product name", () => {
    const testName = "Sofa";
    const result = validateName(testName, testList);
    expect(result.data).toBe("");
    expect(result.error).toBe("Duplicate Product name");
});