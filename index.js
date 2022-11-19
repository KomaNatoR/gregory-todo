import { Item } from './Item.js';
import {items} from './items.js';

const refs = { 
    list: document.querySelector('.list'),
    form: document.querySelector('.form'),
};

const render = () => { 
    // const lis = items.map((item) => getItemTemplate(item)); - так було!
    const lis = items.map((item) => Item(item));
    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

render();

refs.form.addEventListener('submit', addItem);

function addItem (e) {
    e.preventDefault();
    // const value = e.target.elements.text.value; -- повний варіант!
    const { value } = e.target.elements.text;
    const payLoad = {
        text: value,
        isDone: false,
    };

    refs.form.reset();
    items.push(payLoad);
    render();
};


    console.log(items);


