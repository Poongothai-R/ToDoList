import sortByPrice from "./sortByPrice";

it("Testing sortByPrice function", () => {
    //Arrange
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
    expect(testList[0].price).toBe("500");
    //Act
    const sortedList = sortByPrice(testList);
    //Assert
    expect(sortedList[0].price).toBe("100");
});

it("Testing sortByPrice function - starting with same digit", () => {
    //Arrange
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
            price: "50",
            isCompleted: false,
        },
        {
            id: 2,
            name: "Bed",
            price: "5",
            isCompleted: false,
        }
    ];
    expect(testList[0].price).toBe("500");
    //Act
    const sortedList = sortByPrice(testList);
    //Assert
    expect(sortedList[0].price).toBe("5");
});