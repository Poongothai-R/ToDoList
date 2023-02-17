import Modal from "./Modal";
import {render,screen} from "@testing-library/react";



it("Expect Modal should not display",()=>{
    const testModalState = [null, ()=>{}];
    render(<Modal modalState={testModalState}/>);
    expect(screen.queryByText(/Create new item/i)).not.toBeInTheDocument();
});


it("Expect modal should be display",()=>{
    let mockModal="<ModalForm setModal={setModal} list={list} setList={setList} />";
    const mockModalState = [mockModal, (value)=>{mockModal=value}];
    // render(<Modal modalState={mockModalState} />);
});