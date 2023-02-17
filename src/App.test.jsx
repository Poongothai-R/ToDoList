import App from "./App";

// import { renderHook, act } from "@testing-library/react-hooks";
import { render, screen } from "@testing-library/react";



it("Test logo image using test id", () => {
    render(<App />);
    // this test case developed by using data-testid. data-testid should be unique in the DOM.
    const logo = screen.getByTestId('mainlogo');
    expect(logo).toHaveAttribute('src', 'mainlogo.jpg');
    expect(logo).toHaveAttribute('alt', 'company logo');
});

it("Test logo image by alt text", () => {
    render(<App />);
    // this test case will fail, when multiple images are containing this alt text.
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toHaveAttribute('src', 'mainlogo.jpg');
});

it('Test logo image by querySelector', () => {
    render(<App />)
    const displayedImage = document.querySelector("img");
    expect(displayedImage.src).toContain("mainlogo.jpg");
    expect(displayedImage.alt).toContain("company logo");
});

it("Test logo and hero image using getAllByRole", () => {
    render(<App />);
    const logo = screen.getAllByRole('img');
    expect(logo[0]).toHaveAttribute('src', 'mainlogo.jpg');
    expect(logo[0]).toHaveAttribute('alt', 'company logo');
    // the below expects will fail in case of item(s) available in local storage. also, we need to know the order of image.
    expect(logo[1]).toHaveAttribute('src', 'hero.jpg');
    expect(logo[1]).toHaveAttribute('alt', 'hero-img');
});

//Assume that getting null data from localstorage. hence, App rendering with welcome screen and we can see hero image.
it("Test App rendering logic for Welcome screen", () => {
    Storage.prototype.getItem = jest.fn(() => null);
    render(<App />);
    const logo = screen.getAllByRole('img');
    expect(logo[1]).toHaveAttribute('src', 'hero.jpg');
    expect(logo[1]).toHaveAttribute('alt', 'hero-img');
});

//Assume that getting some data from localstorage. hence, App rendering with shopping screen and we can see eye image on view completed items.
it("Test App rendering logic for Shopping screen", () => {
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

    // GetItem returns 1 and checking get list length should be 1 
    const storageLength = JSON.parse(Storage.prototype.getItem(testData)).length;
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
    // Storage.prototype.setItem = jest.fn(()=> ("todo-list",testData));
    Storage.prototype.getItem = jest.fn(() => testData);

    render(<App />);

    // GetItem returns 1 and checking get list length should be 1 
    const storageLength = JSON.parse(Storage.prototype.getItem("todo-list")).length;
    const storedData = JSON.parse(Storage.prototype.getItem("todo-list"));
    expect(storageLength).toBe(2);
    expect(storedData[1].name).toBe("Lamp");
    expect(storedData[0].name).toBe("Chair");
    expect(storedData[1].price).toBe(2);
    expect(storedData[0].price).toBe(50);
});


