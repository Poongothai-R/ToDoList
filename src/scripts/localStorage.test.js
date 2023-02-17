const localStorageMock = (function () {
    let store = {};

    return {
        getItem(key) {
            return store[key];
        },

        setItem(key, value) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });


const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
};

const mockId = "test-todo-list";
let testList = [{
    id: 0,
    name: "Chair",
    price: 50,
    isCompleted: false,
}];

const item2 ={
    id: 1,
    name: "bed",
    price: 100,
    isCompleted: false,
};

beforeEach(() => {
    window.localStorage.clear();
});

it("data is added into local storage", () => {
    setLocalStorage(mockId, testList);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(testList));
    const result1 = JSON.parse(localStorage.getItem(mockId));
    expect(result1.length).toEqual(1);

    testList = [...testList,item2];
    setLocalStorage(mockId, testList);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(testList));
    const result2 = JSON.parse(localStorage.getItem(mockId));
    expect(result2.length).toEqual(2);
});

