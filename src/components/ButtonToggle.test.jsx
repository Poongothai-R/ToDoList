import ButtonToggle from "./ButtonToggle";
import { render, screen } from "@testing-library/react"

it("Test view completed items - when showcompleted is false", () => {

    //Arrange
    const testHide = false;
    render(<ButtonToggle showCompleted={testHide} />);

    //Act
    const displayedImage = document.querySelector('img');
    const hideCompletedText = screen.queryByText(/Hide Completed Items/i);
    const viewCompletedText = screen.queryByText(/View Completed Items/i);

    //Assert
    expect( hideCompletedText).toBeNull();
    expect(viewCompletedText).toBeInTheDocument();
    expect(displayedImage.src).toContain("eye.png");
    expect(displayedImage.alt).toContain("Eye");
});

it("Test Hide completed items - when showcompleted is true", () => {

    //Arrange
    const testHide = true;
    render(<ButtonToggle showCompleted={testHide} />);


    //ACT
    const displayedImage = document.querySelector('img');
    const hideCompletedText = screen.queryByText(/Hide Completed Items/i);
    const viewCompletedText = screen.queryByText(/View Completed Items/i);

    //Assert
    expect(hideCompletedText).toBeInTheDocument();
    expect(viewCompletedText).toBeNull();
    expect(displayedImage.src).toContain("eye-slash.png");
    expect(displayedImage.alt).toContain("Eye");
});