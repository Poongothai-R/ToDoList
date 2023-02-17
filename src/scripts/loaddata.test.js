import {loadData, saveData} from "./loadData";


it("testing getting data from local storage",()=>{
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
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(testList));
    //Act
    const result = ( loadData("test-list"));
    //Assert
    expect(result.length).toEqual(testList.length);
});


it("Testing save data in local storage",()=>{
    //Act
    const item = {
            name: "Chair",
            price: "500",
        }
     saveData("test-list",item);


});