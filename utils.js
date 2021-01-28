export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function setInLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}