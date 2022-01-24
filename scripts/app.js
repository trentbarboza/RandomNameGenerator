import { SaveToLocalStorageByFirstName, GetLocalStorage, RemoveFromLocalStorage } from './localStorage.js';

let nameInput = document.getElementById('nameInput');
let nameBTN = document.getElementById('nameBTN');
let ppGroupInput = document.getElementById('ppGroupInput');
let ppGroupBTN = document.getElementById('ppGroupBTN');
let groupsInput = document.getElementById('groupsInput');
let groupsBTN = document.getElementById('groupsBTN');
let randomBTN = document.getElementById('randomBTN');
let arrayList = [];

nameBTN.addEventListener('click', function (e) {
    createList(nameInput);
    SaveToLocalStorageByFirstName(nameInput.value);
    nameInput.value = "";
});

groupsBTN.addEventListener('click', function (e) {
    groupGenerator(groupsInput.value);
    GetLocalStorage();
});

ppGroupBTN.addEventListener('click', function (e) {

});

randomBTN.addEventListener('click', function (e) {

})

function createList(nameInput) {
    let button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.type = 'button';
    button.textContent = nameInput.value;
    button.id = nameInput.value;

    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(button);

    injectHere.appendChild(div);

    div.addEventListener('click', function (e) {
        button.remove();
        RemoveFromLocalStorage(button.id);
    })
}

//to get names to show up after refresh
function loadNames() {
    const favorites = GetLocalStorage();
    for (let i = 0; i < favorites.length; i++) {
        loadLocal(favorites[i]);
    }
}
loadNames();

//needed so names will load. removed .value 
function loadLocal(nameInput) {
    let button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.type = 'button';
    button.textContent = nameInput;
    button.id = nameInput;

    let div = document.createElement('div');
    div.className = 'row';
    div.appendChild(button);

    injectHere.appendChild(div);

    div.addEventListener('click', function (e) {
        button.remove();
        RemoveFromLocalStorage(button.id);
    })
}


function groupGenerator(groupsInput) {
    let numberGroups = Math.floor(arrayList.length / groupsInput);
    let tempList = [];
    for (let i = 0; i < groupsInput; i++) {
        tempList[i] = [];
        for (let j = 0; j < numberGroups; j++) {
            let randomize = Math.floor(Math.random() * arrayList.length);
            tempList[i][j] = arrayList[randomize];
            arrayList.splice(randomize, 1);
        }
    }
    let text = "";
    for (let i = 0; i < groupsInput; i++) {
        text += "Group " + (i + 1) + ": ";
        for (let j = 0; j <numberGroups; j++){
            if(j != 0){
                text += ", ";
            }
            text += tempList[i][j];
        }
        text += "/n";
    }
    console.log(text);
}