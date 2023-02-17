import sortByName from "./sortByName";


it("Testing sortByName function - start name in capital", () => {
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
    expect(testList[0].name).toBe("Chair");
    const sortedList = sortByName(testList);
    expect(sortedList[0].name).toBe("Bed");

});


it("Testing sortByName function - start name in small letters", () => {
    const testList = [
        {
            id: 0,
            name: "chair",
            price: "500",
            isCompleted: false,
        },
        {
            id: 1,
            name: "sofa",
            price: "100",
            isCompleted: false,
        },
        {
            id: 2,
            name: "bed",
            price: "400",
            isCompleted: false,
        }
    ];
    expect(testList[0].name).toBe("chair");
    const sortedList = sortByName(testList);
    expect(sortedList[0].name).toBe("bed");

});

it("Testing sortByName function - name start with mixed case letters", () => {
    const testList = [
        {
            id: 0,
            name: "Chair",
            price: "500",
            isCompleted: false,
        },
        {
            id: 1,
            name: "sofa",
            price: "100",
            isCompleted: false,
        },
        {
            id: 2,
            name: "bed",
            price: "400",
            isCompleted: false,
        }
    ];
    expect(testList[0].name).toBe("Chair");
    const sortedList = sortByName(testList);
    expect(sortedList[0].name).toBe("bed");

});


it("Testing sortByName function - name start with same letters", () => {
    const testList = [
        {
            id: 0,
            name: "Bell",
            price: "500",
            isCompleted: false,
        },
        {
            id: 1,
            name: "Bedsheet",
            price: "100",
            isCompleted: false,
        },
        {
            id: 2,
            name: "bedCover",
            price: "400",
            isCompleted: false,
        }
    ];
    expect(testList[0].name).toBe("Bell");
    const sortedList = sortByName(testList);
    expect(sortedList[0].name).toBe("bedCover");
});