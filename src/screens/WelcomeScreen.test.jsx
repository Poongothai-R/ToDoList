import WelcomeScreen from "./WelcomeScreen";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Modal from "../components/Modal";
import ModalForm from "../components/ModalForm";



it('Test hero image by querySelector', () => {
    render(<WelcomeScreen />)
    const displayedImage = document.querySelector('img');
    expect(displayedImage.src).toContain("hero.jpg");
    expect(displayedImage.alt).toContain("hero-img");
});


it("Test welcome screen header", () => {
    render(<WelcomeScreen />);
    const titleElement = screen.queryByText(/welcome to eika!/i);
    expect(titleElement).toBeInTheDocument();
});

it("Test welcome screen paragraph", () => {
    render(<WelcomeScreen />);
    const paragraphElement = screen.queryByText(/Keep track of your shoopping list with the app/i);
    expect(paragraphElement).toBeInTheDocument();
});

it("Test Welcome Screen - Add Item Button", () => {
    render(<WelcomeScreen />);
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    expect(addItemButton).toBeVisible();
    expect(addItemButton).toBeInTheDocument();
});



it("Testing Modal",()=>{
    let testList = [];
    const mockList = [testList,(value)=>{testList=value}];
    let testModal = null;
    const mockModal = [testModal,(value)=>{testModal=value}];
    render(<WelcomeScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    fireEvent.click(addItemButton);

});