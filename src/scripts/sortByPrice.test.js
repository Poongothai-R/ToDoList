import sortByPrice from "./sortByPrice";

it("Testing sortByPrice function", () => {
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
    const sortedList = sortByPrice(testList);
    expect(sortedList[0].price).toBe("100");
});

it("Testing sortByPrice function - starting with same digit", () => {
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
    const sortedList = sortByPrice(testList);
    expect(sortedList[0].price).toBe("5");
});