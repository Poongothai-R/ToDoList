

export function loadData(storageKey){
    const data = localStorage.getItem(storageKey);
    const parseData = JSON.parse(data) || [];
    return parseData;
}

export function saveData(storageKey,data){
    localStorage.setItem(storageKey, data);

}