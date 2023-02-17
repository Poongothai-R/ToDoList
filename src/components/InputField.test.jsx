
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

const testSettings =
    {
        "name": {
            "label": "Product name",
            "type": "text",
            "placeholder": "Ex: Chair",
            "required": true,
            "autoFocus": true
        },
        "price": {
            "label": "Product price",
            "type": "number",
            "placeholder": "Ex: 500",
            "required": true,
            "autoFocus": false
        }
    };

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

it("Test invalid settings", () => {
    let testName = "";
    let mockList = [];
    const mockNameState = [testName, (value) => { testName = value }];
    try {
        render(<InputField settings={undefined} validation={validateName} state={mockNameState} list={mockList} />);
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("The setting prop is missing");
    }
});

it("Test invalid state", () => {
    let testName = "";
    let mockList = [];
    // const mockNameState = [testName, (value) => { testName = value }];
    try {
        render(<InputField settings={testSettings.name} validation={validateName} state={undefined} list={mockList} />);
        expect(true).toBe(false);
    } catch (e) {
        expect(e.message).toBe("The state prop is missing");
    }
});

it("Test undefined validation function", () => {
    let testName = "Sofa";
    let mockList = [];
    const mockNameState = [testName, (value) => { testName = value }];
    render(<InputField settings={testSettings.name} validation={undefined} state={mockNameState} list={mockList} />);
    expect(testName).toBe("Sofa");
    const inputElement = screen.getByLabelText("Product name")
    fireEvent.blur(inputElement);
    expect(testName).toBe("0");
});


it("Test Product Name", () => {
    let testName = "";
    let mockList = [];
    const mockNameState = [testName, (value) => { testName = value }];
    render(<InputField settings={testSettings.name} validation={validateName} state={mockNameState} list={mockList} />);
    expect(screen.queryByLabelText(/Product name/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/Product price/i)).not.toBeInTheDocument();
});

it("Test Product Name - check empty validate", () => {
    let testName = "";
    let mockList = [];
    const mockNameState = [testName, (value) => { testName = value }];
    render(<InputField settings={testSettings.name} validation={validateName} state={mockNameState} list={mockList} />);
    const inputElement = screen.getByLabelText("Product name")
    // expect(inputElement).toHaveValue("");
    expect(testName).toBe("");
    fireEvent.change(inputElement, { target: { value: "   " } });
    expect(testName).toBe("   ");
    fireEvent.blur(inputElement);
    expect(testName).toBe("");
});

it("Test Product Name - check duplicate item", () => {
    let testName = "";
    let mockList = testList;
    const mockNameState = [testName, (value) => { testName = value }];
    render(<InputField settings={testSettings.name} validation={validateName} state={mockNameState} list={mockList} />);
    const inputElement = screen.getByLabelText("Product name")
    expect(testName).toBe("");
    fireEvent.change(inputElement, { target: { value: "Chair" } });
    expect(testName).toBe("Chair");
    fireEvent.blur(inputElement);
    expect(testName).toBe("");
});

// it("Test Product Name - check trim function", () => {
//     let testName = "";
//     let mockList = testList;
//     const mockNameState = [testName, (value) => { testName = value }];
//     render(<InputField settings={testSettings.name} validation={validateName} state={mockNameState} list={mockList} />);
//     const inputElement = screen.getByLabelText("Product name")
//     expect(testName).toBe("");
//     fireEvent.change(inputElement, { target: { value: " desktop table " } });
//     expect(testName).toBe(" desktop table ");
//     fireEvent.blur(inputElement);
//     expect(testName).toBe("desktop table");
// });

it("Test Product Price", () => {
    let testPrice = "";
    let mockList = [];
    const mockPriceState = [testPrice, (value) => { testPrice = value }];
    render(<InputField settings={testSettings.price} validation={validatePrice} state={mockPriceState} list={mockList} />);
    expect(screen.queryByLabelText(/Product name/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Product price/i)).toBeInTheDocument();
});


it("Test Product Price - should not be < 1", () => {
    let testPrice = "";
    let mockList = testList;
    const mockPriceState = [testPrice, (value) => { testPrice = value }];
    render(<InputField settings={testSettings.price} validation={validatePrice} state={mockPriceState} list={mockList} />);
    const inputElement = screen.getByLabelText("Product price")
    expect(testPrice).toBe("");
    fireEvent.change(inputElement, { target: { value: "0" } });
    expect(testPrice).toBe("0");
    fireEvent.focus(inputElement);
    expect(testPrice).toBe("0");
});

it("Test Product Price - check > 0", () => {
    let testPrice = "";
    let mockList = [];
    const mockPriceState = [testPrice, (value) => { testPrice = value }];
    render(<InputField settings={testSettings.price} validation={validatePrice} state={mockPriceState} list={mockList} />);
    const inputElement = screen.getByLabelText("Product price")
    expect(testPrice).toBe("");
    fireEvent.change(inputElement, { target: { value: "500" } });
    expect(testPrice).toBe("500");
    fireEvent.focus(inputElement);
    expect(testPrice).toBe("500");
});