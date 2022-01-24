let favorites = [];

function SaveToLocalStorageByFirstName(firstName)
{
    favorites.push(firstName);
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

function SaveToLocalStorage(){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}

let localStorageItem = localStorage.getItem('Favorites');

function GetLocalStorage(){
    let localStorageItem = localStorage.getItem('Favorites');
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
    return favorites;
}

function RemoveFromLocalStorage(firstName){
    let nameIndex = favorites.indexOf(firstName);
    //found cityname in array favorites
    favorites.splice(nameIndex,1);
    SaveToLocalStorage();
}

export {SaveToLocalStorageByFirstName, GetLocalStorage, RemoveFromLocalStorage}