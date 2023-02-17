import sortByName from "../scripts/sortByName";
import sortByPrice from "../scripts/sortByPrice";

export default function Sorter({ list, setList }) {
  function sortName() {
    const sortedList = sortByName(list);
    setList(sortedList);
  }
  function sortPrice() {
    const clonedList = sortByPrice(list);
    setList(clonedList);
  }

  return (
    <section className="sorter">
      Sort by:
      <button onClick={sortName}>Name</button>
      <button onClick={sortPrice}>Price</button>
    </section>
  );
}
