import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";

const mockItem = {
    id: 0,
    name: "chair",
    price: "400",
    isCompleted: false,
};

it("Expecting to see checkbox, name, price component items and checkbox is unchecked for pending item", () => {
    let testItem = mockItem;
    render(<TaskItem item={testItem}/>);
    expect(screen.queryByText(/Chair/i)).toBeVisible();
    expect(screen.queryByText(/400/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).not.toBeChecked();
});

it("Expecting to see checkbox, name, price component items and checkbox is checked for completed items", () => {
    let testItem = mockItem;
    testItem.isCompleted=true;
    render(<TaskItem item={testItem}/>);
    expect(screen.queryByText(/Chair/i)).toBeVisible();
    expect(screen.queryByText(/400/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeChecked();
});

it("Testing checkbox's onCheck event",()=>{
    let testItem = {
        id: 0,
        name: "chair",
        price: "400",
        isCompleted: false,
    };
    render(<TaskItem item={testItem} editList={(value)=> testItem=value}/>);
    const checkboxElement = screen.getByTestId('checkbox');
    expect(testItem.isCompleted).toBe(false);
    fireEvent.click(checkboxElement);
    expect(testItem.isCompleted).toBe(true);
});