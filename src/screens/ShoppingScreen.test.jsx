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

it("Test1", () => {
    const emptyList = [];
    render(<ShoppingScreen list={emptyList} />);
    //Act
    const noItemBanner = screen.queryByText(/no pending items to show/i);
    const headingElement = screen.queryByText(/Your Shopping list/i);
    //Assert
    expect(noItemBanner).toBeInTheDocument();
    expect(headingElement).toBeVisible();
});

it("Test2", () => {
    render(<ShoppingScreen list={testList} />);
    const pendingElement1 = screen.queryByText(/Chair/i);
    expect(pendingElement1).toBeInTheDocument();
    const pendingElement2 = screen.queryByText(/sofa/i);
    expect(pendingElement2).toBeInTheDocument();
});

it("Test3", () => {
    render(<ShoppingScreen list={testList} />);
    const completedElement = screen.queryByText(/Bed/i);
    expect(completedElement).not.toBeInTheDocument();
});

it("Test4", () => {
    render(<ShoppingScreen list={[]} />);
    const sorterElement = screen.queryByText(/name/i);
    expect(sorterElement).toBeVisible();
});

it("Test5", () => {

    render(<ShoppingScreen list={testList} />);
    const buttonElement = screen.getByRole('button', { name: /Completed items/i });
    expect(buttonElement).toBeVisible();
    expect(screen.queryByText(/Bed/i)).not.toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(screen.queryByText(/Bed/i)).toBeVisible();
});


it("Checkbox Test", () => {
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
    let testList1 = testList;
    const mockList = [testList1, (value) => { testList1 = value }];
    let testModal = null;
    const mockModal = [testModal, (value) => { testModal = value }];
    render(<ShoppingScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    const checkboxElement = screen.getAllByTestId("checkbox");
    expect(testList1[0].isCompleted).toBe(false);
    fireEvent.click(checkboxElement[0]);
    expect(testList1[0].isCompleted).toBe(true);
});
it("Test AddItem button", () => {
    let testList = [];
    const mockList = [testList, (value) => { testList = value }];
    let testModal = null;
    const mockModal = [testModal, (value) => { testModal = value }];
    render(<ShoppingScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    fireEvent.click(addItemButton);
});




