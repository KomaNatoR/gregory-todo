import { getItemTemplate } from './getItemTemplate.js';
// import { items } from './items.js'; -- було так!
import {items as importedItems} from './items.js';

let items = importedItems;
const refs = { 
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),
};

const render = () => { 
    // const lis = items.map((item) => getItemTemplate(item)); - так було!
    const lis = items.map(getItemTemplate);
    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

function hendleSubmit(e) {
    // const value = e.target.elements.text.value; -- повний варіант!
    const { value } = e.target.elements.text;

    e.preventDefault();
    addItem(value);
    render();
    refs.form.reset();
}

function addItem (text) {
    
    const payLoad = {
        // text: text, - так було!
        text,
        isDone: false,
        id: uuid.v4(),
    };
    items.push(payLoad);
};

const toggleItem = (id) => { 
    console.log('toggle', id);
};
const viewItem = (id) => { 
    console.log('view', id);
};
const deleteItem = (id) => { 
    items = items.filter(item => item.id !== id);
    render();
    console.log(items, id);
};

function hendleListClick(e) {
    if (e.target === e.currentTarget) return;

    const { action } = e.target.dataset;
    const parent = e.target.closest('li');
    const { id } = parent.dataset;
    // console.log(e.currentTarget);

    switch (action) {
        case 'toggle':
            toggleItem(id);
            break;
       case 'view':
            viewItem(id);
            break;
       case 'delete':
            deleteItem(id);
            break;
    }
}

render();
refs.form.addEventListener('submit', hendleSubmit);
refs.list.addEventListener('click', hendleListClick);