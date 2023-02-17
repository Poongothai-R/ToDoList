import Sorter from "./Sorter";
import {fireEvent, render, screen} from "@testing-library/react";

const testListData = [
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

it("Testing Sorter component - checking buttons",()=>{
    //Arrange
    let testList = testListData;
    render(<Sorter list={testList} />);
    //Act
    const sortNameButton  = screen.queryByText(/Name/i);
    const sortPriceButton  = screen.queryByText(/Price/i);
    //Assert
    expect(sortNameButton).toBeTruthy();
    expect(sortPriceButton).toBeTruthy();
});

it("Testing SortName Button-Sorting items by alphabetically",()=>{
    //Arrange
    let testList = testListData;
    const mockList = [testList,(value)=>{testList=value}];
    render(<Sorter list={mockList[0]} setList={mockList[1]} />);
    //Act
    const sortNameButton  = screen.getByRole('button',{name: /Name/i});
    expect(testList[0].name).toBe('Chair');
    fireEvent.click(sortNameButton);
    //Assert
    expect(testList[0].name).toBe('bed');
});


it("Testing SortPrice Button - sorting items by lower price to higher price",()=>{
    //Arrange
    let testList = testListData;
    const mockList = [testList,(value)=>{testList=value}];
    render(<Sorter list={mockList[0]} setList={mockList[1]} />);
    //Act
    const sortPriceButton  = screen.getByRole('button',{name: /Price/i});
    expect(testList[0].price).toBe('500');
    fireEvent.click(sortPriceButton);
    //Assert
    expect(testList[0].price).toBe('100');
});