import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

test("Expected to show No pending items when the list is empty", () => {

    //Arrange
    const fakeList = [];
    render(<TaskList list={fakeList} />);

    //Act
    const textElement = screen.queryByText(/no pending items to show/i);

    //Assert
    expect(textElement).toBeInTheDocument();
});

test("Expected not to show no pending items when the list has value", () => {

    //Arrange
    const fakeList = [{id:0,name:"table"},{id:1,name:"sofa"}];
    render(<TaskList list={fakeList} />);

    //Act
    const textElement = screen.queryByText(/no pending items to show/i);

    //Assert
    expect(textElement).not.toBeInTheDocument();
});
test("Expected to show product items when the list has value", () => {

    //Arrange
    const fakeList = [{id:0,name:"table"},{id:1,name:"sofa"}];
    render(<TaskList list={fakeList} />);

    //Act
    const textElement = screen.queryByText(/table/i);

    //Assert
    expect(textElement).toBeInTheDocument();
});