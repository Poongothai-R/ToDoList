import {loadData, saveData} from "./loadData";


it("testing getting data from local storage",()=>{
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
    const result = ( loadData("test-list"));
    expect(result.length).toEqual(testList.length);
    console.log(result);
});


it("Testing save data in local storage",()=>{
    const item = {
            name: "Chair",
            price: "500",
        }
     saveData("test-list",item);

});