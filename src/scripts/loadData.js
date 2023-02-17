

export function loadData(storageKey){
    console.log(storageKey);
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];
    console.log(parseData);
    return parseData;
}

export function saveData(storageKey,data){
    localStorage.setItem(storageKey, data);

}