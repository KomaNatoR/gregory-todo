// const getItemTemplate = (text) - так було!
// const getItemTemplate = ({text, isDone}) - потім так.
export const Item = ({text, isDone}) =>
    `<li class="item">
        <div>
            <input
                type="checkbox" ${isDone ? 'checked' : ''}/>
            <span>${text}</span>
        </div>
        <button type="button">x</button>
    </li>`;