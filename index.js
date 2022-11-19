import { getItemTemplate } from './getItemTemplate.js';
import {items} from './items.js';

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

const toggleItem = () => { 
    console.log('toggle');
};
const viewItem = () => { 
    console.log('view');
};
const deleteItem = () => { 
    console.log('delete');
};

function hendleListClick(e) {
    if (e.target === e.currentTarget) return;

    const { action } = e.target.dataset;
    const parent = e.target.closest('li');
    const { id } = parent.dataset;
    console.log(action, id);
    // console.log(e.currentTarget);

    switch (action) {
        case value:
            toggleItem();
            break;
    }
}

render();
refs.form.addEventListener('submit', hendleSubmit);
refs.list.addEventListener('click', hendleListClick);