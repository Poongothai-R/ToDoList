export default function sortByName(list) {
    const clonedList = [...list];
    const sortedList = clonedList.sort((a, b) => {
      const productA = a.name.toUpperCase();
      const productB = b.name.toUpperCase();
      return productA > productB ? 1 : -1;
    });
    return sortedList;
  }