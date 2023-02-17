import { useState } from "react";
import ButtonToggle from "../components/ButtonToggle";
import ModalForm from "../components/ModalForm";
import Sorter from "../components/Sorter";
import TaskList from "../components/TaskList";

export default function ShoppingScreen({ setModal, list, setList }) {

  const [showCompleted, setShowCompleted] = useState(false);
  const completedItems = list.filter((item) => item.isCompleted === true);
  const pendingItems = list.filter((item) => item.isCompleted === false);

  function editList(editedItem) {
    const clonedList = [...list];
    const index = clonedList.findIndex((item) => item.id === editedItem.id);
    clonedList[index] = editedItem;
    setList(clonedList);
  }

  return (
    <section className="shopping_screen">
      <h1>Your Shopping list</h1>
      <Sorter list={list} setList={setList} />
      <TaskList list={pendingItems} editList={editList} />
      <div className="button_main">
        <button
          className="button_primary"
          onClick={() =>
            setModal(
              <ModalForm setModal={setModal} list={list} setList={setList} />
            )
          }
        >
          Add Item
        </button>
        <ButtonToggle
          showCompleted={showCompleted}
          onClick={() => setShowCompleted(!showCompleted)}
        />
      </div>
      {showCompleted && <TaskList list={completedItems} editList={editList} />}
    </section>
  );
}
