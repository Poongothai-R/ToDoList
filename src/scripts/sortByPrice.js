export default function sortByPrice(list) {
    const clonedList = [...list];
    clonedList.sort((a, b) => a.price - b.price);
    return clonedList;
}