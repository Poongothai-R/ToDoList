import { useState } from "react";
import InputField from "./InputField";
import form from "../data/formFields.json";
import validateName from "../scripts/validateName";
import validatePrice from "../scripts/validatePrice";

export default function ModalForm({ setModal, list, setList }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addItem(name, price) {
    const newItem = {
      id: list.length,
      name: name,
      price: price,
      isCompleted: false,
    };
    setList([...list, newItem]);
  }

  function onSubmit(event) {
    event.preventDefault();
    addItem(name, price);
    resetForm();
  }
  function resetForm() {
    setName("");
    setPrice("");
    setModal(null);
  }

  return (
    <form className="modal_form" onSubmit={(event) => onSubmit(event)}>
      <h2>Create new item</h2>
      <InputField
        settings={form.name}
        state={[name, setName]}
        validation={validateName}
        list={list}
      />
      <InputField
        settings={form.price}
        state={[price, setPrice]}
        validation={validatePrice}
      />
      <button className="button_primary">Submit</button>
      <button className="button_secondary" onClick={resetForm}>
        Cancel
      </button>
    </form>
  );
}
