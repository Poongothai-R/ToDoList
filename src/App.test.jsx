import App from "./App";
import { render, screen } from "@testing-library/react";


it("Test logo image using test id", () => {
    //Arrange
    render(<App />);
    // Act
    const logo = screen.getByTestId('mainlogo');
    //Assert
    expect(logo).toHaveAttribute('src', 'mainlogo.jpg');
    expect(logo).toHaveAttribute('alt', 'company logo');
});

it("Test logo image by alt text", () => {
    //Arrange
    render(<App />);
    // Act
    const logo = screen.getByAltText(/logo/i);
    //Assert
    expect(logo).toHaveAttribute('src', 'mainlogo.jpg');
});

it('Test logo image by querySelector', () => {
    //Arrange
    render(<App />)
    //Act
    const displayedImage = document.querySelector("img");
    //Assert
    expect(displayedImage.src).toContain("mainlogo.jpg");
    expect(displayedImage.alt).toContain("company logo");
});

it("Test logo and hero image using getAllByRole", () => {
    //Arrange
    render(<App />);
    //Act
    const logo = screen.getAllByRole('img');
    //Assert
    expect(logo[0]).toHaveAttribute('src', 'mainlogo.jpg');
    expect(logo[0]).toHaveAttribute('alt', 'company logo');
    expect(logo[1]).toHaveAttribute('src', 'hero.jpg');
    expect(logo[1]).toHaveAttribute('alt', 'hero-img');
});

//Assume that getting null data from localstorage. hence, App rendering with welcome screen and we can see hero image.
it("Test App rendering logic for Welcome screen", () => {

    //Arrange
    Storage.prototype.getItem = jest.fn(() => null);
    render(<App />);
    //act
    const logo = screen.getAllByRole('img');
    //assert
    expect(logo[1]).toHaveAttribute('src', 'hero.jpg');
    expect(logo[1]).toHaveAttribute('alt', 'hero-img');
});

//Assume that getting some data from localstorage. hence, App rendering with shopping screen and we can see eye image on view completed items.
it("Test App rendering logic for Shopping screen", () => {
    //Arrange
    const testItem = {
        id: 0,
        name: "Chair",
        price: 50,
        isCompleted: false,
    };
    const testList = [testItem];
    const testData = JSON.stringify(testList);
    Storage.prototype.getItem = jest.fn(() => testData);
    render(<App />);
    //Act
    const storageLength = JSON.parse(Storage.prototype.getItem(testData)).length;
    //Assert
    expect(storageLength).toBe(1);
    // GetItem returns data and so we can eye image on shopping screen.
    const logo = screen.getAllByRole('img');
    expect(logo[1]).toHaveAttribute('src', 'eye.png');
    expect(logo[1]).toHaveAttribute('alt', 'Eye');
    // GetItem returns data and so we can see the added task name.
    const titleElement = screen.queryByText(/Chair/i);
    expect(titleElement).toBeInTheDocument();
});


it("Test App rendering logic for Shopping screen1", () => {
    const testList = [{
        id: 0,
        name: "Chair",
        price: 50,
        isCompleted: false,
    },
     {
        id: 1,
        name: "Lamp",
        price: 2,
        isCompleted: false,
    }];
    const testData = JSON.stringify(testList);
    Storage.prototype.getItem = jest.fn(() => testData);
    //Act
    render(<App />);
    const storageLength = JSON.parse(Storage.prototype.getItem("todo-list")).length;
    const storedData = JSON.parse(Storage.prototype.getItem("todo-list"));
    //Assert
    expect(storageLength).toBe(2);
    expect(storedData[1].name).toBe("Lamp");
    expect(storedData[0].name).toBe("Chair");
    expect(storedData[1].price).toBe(2);
    expect(storedData[0].price).toBe(50);
});


