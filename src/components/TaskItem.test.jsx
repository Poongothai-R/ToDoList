import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";


it("Expecting to see checkbox, name, price component items and checkbox is unchecked for pending item", () => {
    //Arrange
    let mockItem = {
        id: 0,
        name: "chair",
        price: "400",
        isCompleted: false,
    };
    //Act
    render(<TaskItem item={mockItem}/>);
    //Assert
    expect(screen.queryByText(/Chair/i)).toBeVisible();
    expect(screen.queryByText(/400/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).not.toBeChecked();
});

it("Expecting to see checkbox, name, price component items and checkbox is checked for completed items", () => {
    //Arrange
    let mockItem = {
        id: 0,
        name: "chair",
        price: "400",
        isCompleted: false,
    };
    mockItem.isCompleted=true;
    //Act
    render(<TaskItem item={mockItem}/>);
    //Assert
    expect(screen.queryByText(/Chair/i)).toBeVisible();
    expect(screen.queryByText(/400/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeVisible();
    expect(screen.getByRole(/checkbox/i)).toBeChecked();
});

it("Testing checkbox's onCheck event",()=>{
    //Arrange
    let testItem = {
        id: 0,
        name: "chair",
        price: "400",
        isCompleted: false,
    };
    render(<TaskItem item={testItem} editList={(value)=> testItem=value}/>);
    const checkboxElement = screen.getByTestId('checkbox');
    //Act
    fireEvent.click(checkboxElement);
    //Assert
    expect(testItem.isCompleted).toBe(true);
});