import {fireEvent, render, screen} from "@testing-library/react";
import ModalForm from "./ModalForm";



it("Test ModalForm",()=>{
    const testSetModal=[null,()=>{}];
    render(<ModalForm setModal={testSetModal}/>);
    expect(screen.queryByText(/Create new item/i)).toBeInTheDocument();
});

it("Test cancel button",()=>{
    let mockList = [];
    const mockListState = [mockList, (value)=>{mockList=value}];
    let mockModal = null;
    const mockModalState = [mockModal,(value)=>{mockModal=value}];
    render(<ModalForm setModal={mockModalState[1]} list={mockList} setList={mockListState[1]} />);
    const inputElement = screen.getByLabelText("Product name");
    expect(inputElement).toHaveDisplayValue("");
    fireEvent.change(inputElement, { target: { value: "Chair" } });
    expect(inputElement).toHaveDisplayValue("Chair");
    fireEvent.click(screen.getByRole('button',{name: /cancel/i}));
    expect(inputElement).toHaveDisplayValue("");
});

it("Test Submit button",()=>{
    let mockList = [];
    const mockListState = [mockList, (value)=>{mockList=value}];
    let mockModal = null;
    const mockModalState = [mockModal,(value)=>{mockModal=value}];
    render(<ModalForm setModal={mockModalState[1]} list={mockList} setList={mockListState[1]} />);
    expect(mockList.length).toBe(0);
    const productNameElement = screen.getByLabelText("Product name");
    fireEvent.change(productNameElement, { target: { value: "Chair" } });
    expect(screen.getByLabelText('Product name')).toHaveDisplayValue("Chair");
    const productPriceElement = screen.getByLabelText("Product price");
    fireEvent.change(productPriceElement, { target: { value: "100" } });
    expect(screen.getByLabelText('Product price')).toHaveDisplayValue("100");
    fireEvent.click(screen.getByRole('button',{name: /submit/i}));
    expect(mockList.length).toBe(1);
});
