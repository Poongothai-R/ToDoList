import WelcomeScreen from "./WelcomeScreen";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

it('Test hero image by querySelector', () => {
    //Arrange
    render(<WelcomeScreen />)
    //Act
    const displayedImage = document.querySelector('img');
    //Assert
    expect(displayedImage.src).toContain("hero.jpg");
    expect(displayedImage.alt).toContain("hero-img");
});


it("Test welcome screen header", () => {
    //Arrange
    render(<WelcomeScreen />);
    //Act
    const titleElement = screen.queryByText(/welcome to eika!/i);
    //Assert
    expect(titleElement).toBeInTheDocument();
});

it("Test welcome screen paragraph", () => {
    //Arrange
    render(<WelcomeScreen />);
    //Act
    const paragraphElement = screen.queryByText(/Keep track of your shoopping list with the app/i);
    //Assert
    expect(paragraphElement).toBeInTheDocument();
});

it("Test Welcome Screen - Add Item Button", () => {
    //Arrange
    render(<WelcomeScreen />);
    //Act
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    //Assert
    expect(addItemButton).toBeVisible();
    expect(addItemButton).toBeInTheDocument();
});



it("Testing Modal",()=>{
    //Arrange
    let testList = [];
    const mockList = [testList,(value)=>{testList=value}];
    let testModal = null;
    const mockModal = [testModal,(value)=>{testModal=value}];
    //Act
    render(<WelcomeScreen setModal={mockModal[1]} list={mockList[0]} setList={mockList[1]} />);
    const addItemButton = screen.getByRole('button', { name: /Add Item/i });
    //Assert
    fireEvent.click(addItemButton);

});