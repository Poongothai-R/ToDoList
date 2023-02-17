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
    let testList = testListData;
    render(<Sorter list={testList} />);
    const sortNameButton  = screen.queryByText(/Name/i);
    expect(sortNameButton).toBeTruthy();
    const sortPriceButton  = screen.queryByText(/Price/i);
    expect(sortPriceButton).toBeTruthy();
});

it("Testing SortName Button",()=>{
    let testList = testListData;
    const mockList = [testList,(value)=>{testList=value}];
    render(<Sorter list={mockList[0]} setList={mockList[1]} />);
    const sortNameButton  = screen.getByRole('button',{name: /Name/i});
    expect(testList[0].name).toBe('Chair');
    fireEvent.click(sortNameButton);
    expect(testList[0].name).toBe('bed');
});


it("Testing SortPrice Button",()=>{
    let testList = testListData;
    const mockList = [testList,(value)=>{testList=value}];
    render(<Sorter list={mockList[0]} setList={mockList[1]} />);
    const sortPriceButton  = screen.getByRole('button',{name: /Price/i});
    expect(testList[0].name).toBe('Chair');
    fireEvent.click(sortPriceButton);
    expect(testList[0].name).toBe('sofa');
});