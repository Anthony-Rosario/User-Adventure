export function findById(someArray, id) {
    return someArray.find(item => item.id === id);
}

export function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function setInLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 100,
        gold: 0,
        completed: {},
    };
    return user;
}