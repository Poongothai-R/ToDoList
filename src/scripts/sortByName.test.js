import sortByName from "./sortByName";


it("Testing sortByName function - start name in capital", () => {
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
    expect(testList[0].name).toBe("Chair");
    //Act
    const sortedList = sortByName(testList);
    //Assert
    expect(sortedList[0].name).toBe("Bed");
});


it("Testing sortByName function - start name in small letters", () => {
    //Arrange
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
    //Act
    const sortedList = sortByName(testList);
    //Assert
    expect(sortedList[0].name).toBe("bed");

});

it("Testing sortByName function - name start with mixed case letters", () => {
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
    //Act
    const sortedList = sortByName(testList);
    //Assert
    expect(sortedList[0].name).toBe("bed");

});


it("Testing sortByName function - name start with same letters", () => {
    //Arrange
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
    //Act
    const sortedList = sortByName(testList);
    //Assert
    expect(sortedList[0].name).toBe("bedCover");
});