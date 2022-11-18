// const getItemTemplate = (text) - так було!
const getItemTemplate = ({text, isDone}) =>
    `<li class="item">
        <div>
            <input type="checkbox" ${isDone ? 'checked' : ''}/>
            <span>${text}</span>
        </div>
        <button type="button">x</button>
    </li>`;

const refs = { 
    list: document.querySelector('.list'),
};

const render = () => { 
    const lis = items.map((item) => getItemTemplate(item));
    refs.list.innerHTML = '';
    refs.list.insertAdjacentHTML('beforeend', lis.join(''));
};

const items = [
    {
       text: 'by bread',
       isDone: true, 
    },
    {
       text: 'by milk',
       isDone: false, 
    },
    {
       text: 'push money to phone',
       isDone: false, 
    },
];
render();


