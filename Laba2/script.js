const form = document.querySelector("#to-do-form");
const tasks = document.querySelector("#tasks").getElementsByTagName('tbody')[0];

const deletionHandler = (e) => {
    e.currentTarget.parentNode.remove();
}

const doneHandler = (e) => {
    e.currentTarget.classList.toggle('done');
}

const buildNewRow = (title, priority) => {
    const t = document.createElement('td');
    const p = document.createElement('td');
    const del_btn = document.createElement('span');
    t.innerHTML = title;
    p.innerHTML = priority;
    del_btn.className += ('remove-task glyphicon glyphicon-trash');
    del_btn.addEventListener('click', deletionHandler);
    const row = document.createElement('tr');
    row.appendChild(t);
    row.appendChild(p);
    row.appendChild(del_btn);
    row.addEventListener('click', doneHandler);

    return row;
}

const addHandler = (e) => {
    e.preventDefault();
    const title = e.currentTarget.title.value.trim();
    const priority = e.currentTarget.priority.value;
    tasks.appendChild(buildNewRow(title, priority));
    e.currentTarget.title.value = "";
    e.currentTarget.priority.value = "";  
}

form.addEventListener('submit',addHandler);