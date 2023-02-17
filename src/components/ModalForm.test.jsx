import {fireEvent, render, screen} from "@testing-library/react";
import ModalForm from "./ModalForm";

it("expected not to open ModalForm when it is null",()=>{
    //Arrange
    const testSetModal=[null,()=>{}];
    //Act
    render(<ModalForm setModal={testSetModal}/>);
    //Assert
    expect(screen.queryByText(/Create new item/i)).toBeInTheDocument();
});

it("Test cancel button",()=>{
    //Arrange
    let mockList = [];
    const mockListState = [mockList, (value)=>{mockList=value}];
    let mockModal = null;
    const mockModalState = [mockModal,(value)=>{mockModal=value}];
    render(<ModalForm setModal={mockModalState[1]} list={mockList} setList={mockListState[1]} />);
    const inputElement = screen.getByLabelText("Product name");
    //Act
    fireEvent.change(inputElement, { target: { value: "Chair" } });
    expect(inputElement).toHaveDisplayValue("Chair");
    fireEvent.click(screen.getByRole('button',{name: /cancel/i}));
    //Assert
    expect(inputElement).toHaveDisplayValue("");

});

it("Test Submit button",()=>{
    //Arrange
    let mockList = [];
    const mockListState = [mockList, (value)=>{mockList=value}];
    let mockModal = null;
    const mockModalState = [mockModal,(value)=>{mockModal=value}];
    render(<ModalForm setModal={mockModalState[1]} list={mockList} setList={mockListState[1]} />);
    expect(mockList.length).toBe(0);
    const productNameElement = screen.getByLabelText("Product name");
    const productPriceElement = screen.getByLabelText("Product price");
    //Act
    fireEvent.change(productNameElement, { target: { value: "Chair" } });
    fireEvent.change(productPriceElement, { target: { value: "100" } });
    fireEvent.click(screen.getByRole('button',{name: /submit/i}));
    //Assert
    expect(mockList.length).toBe(1);
});
