import { fireEvent, render, screen } from "@testing-library/react";
import ShoppingScreen from "./ShoppingScreen";


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
        isCompleted: true,
    }
];

it("Showing no pendings items when the list empty", () => {
    //Arrange
    const emptyList = [];
    render(<ShoppingScreen list={emptyList} />);
    //Act
    const noItemBanner = screen.queryByText(/no pending items to show/i);
    const headingElement = screen.queryByText(/Your Shopping list/i);
    //Assert
    expect(noItemBanner).toBeInTheDocument();
    expect(headingElement).toBeVisible();
});

it("Showing pending items when the list exists", () => {
    //Arrange
    render(<ShoppingScreen list={testList} />);
    //Act
    const pendingElement1 = screen.queryByText(/Chair/i);
    const pendingElement2 = screen.queryByText(/sofa/i);
    //Assert
    expect(pendingElement1).toBeInTheDocument();
    expect(pendingElement2).toBeInTheDocument();
});

it("moved marked item from tasklist to completed list", () => {
    //Arrange
    render(<ShoppingScreen list={testList} />);
    //act
    const completedElement = screen.queryByText(/Bed/i);
    //Assert
    expect(completedElement).not.toBeInTheDocument();
});

it("checking sorting element is present", () => {
    //arrange
    render(<ShoppingScreen list={[]} />);
    //act
    const sorterElement = screen.queryByText(/name/i);
    //assert
    expect(sorterElement).toBeVisible();
});

it("checking items present in completed list when check box is completed", () => {
    //Arrange
    render(<ShoppingScreen list={testList} />);
    //Act
    const buttonElement = screen.getByRole('button', { name: /Completed items/i });
    expect(screen.queryByText(/Bed/i)).not.toBeInTheDocument();
    fireEvent.click(buttonElement);
    //Assert
    expect(screen.queryByText(/Bed/i)).toBeVisible();
});


it("Checkbox Test", () => {
    //Arrange
    render(<ShoppingScreen list={testList} />);
    const checkboxElement = screen.getAllByRole('checkbox');
    expect(checkboxElement[0]).not.toBeChecked();
    expect(checkboxElement[1]).not.toBeChecked();
    expect(checkboxElement[2]).toBe(undefined);
    const buttonElement = screen.getByRole('button', { name: /Completed items/i });
    fireEvent.click(buttonElement);
    const checkedCheckbox = screen.getAllByRole('checkbox');
    expect(checkedCheckbox[0]).not.toBeChecked();
    expect(checkboxElement[1]).not.toBeChecked();
    expect(checkedCheckbox[2]).toBeChecked();
});

it("Test editList function call", () => {
    //arrange
    let testList1 = testList;
    const mockList = [testList1, (value) => { testList1 = value }];
    let testModal = null;
    const mockModal = [testModal, (value) => { testModal = value }];
    render(<ShoppingScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    //Act
    const checkboxElement = screen.getAllByTestId("checkbox");
    expect(testList1[0].isCompleted).toBe(false);
    fireEvent.click(checkboxElement[0]);
    //Assert
    expect(testList1[0].isCompleted).toBe(true);
});
it("Test AddItem button", () => {
    //Arrange
    let testList = [];
    const mockList = [testList, (value) => { testList = value }];
    let testModal = null;
    const mockModal = [testModal, (value) => { testModal = value }];
    //Act
    render(<ShoppingScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    //Assert
    fireEvent.click(addItemButton);
});




