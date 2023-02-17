import Modal from "./Modal";
import {render,screen} from "@testing-library/react";



it("Expect Modal should not display",()=>{
    //Arrange
    const testModalState = [null, ()=>{}];
    //Act
    render(<Modal modalState={testModalState}/>);
    //Assert
    expect(screen.queryByText(/Create new item/i)).not.toBeInTheDocument();
});


it("Expect modal should be display",()=>{
    //Arrange
    let mockModal="<ModalForm setModal={setModal} list={list} setList={setList} />";
    const mockModalState = [mockModal, (value)=>{mockModal=value}];
    //Act
    //render(<Modal modalState={mockModalState} />);
});