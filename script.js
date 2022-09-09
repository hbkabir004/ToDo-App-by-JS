const getElement = id =>{
    const element = document.getElementById(id);
    return element;
}

const addTodo =()=>{
    const todos = JSON.parse(localStorage.getItem('TODOs'));
    const inputText = getElement('todo-text').value;
    getElement('todo-text').value ='';
    // console.log(inputField);
    if(!todos){
        const todoList = [
            {
                title: inputText,
                completed: false,
            },
        ];
        localStorage.setItem('TODOs', JSON.stringify(todoList));
    }
    else{
        const todoList = [
            ...todos,
            {
                title:inputText,
                completed:false,
            },
        ];
        localStorage.setItem('TODOs', JSON.stringify(todoList))
    }
    render();
}

const render=()=>{
    const todos = JSON.parse(localStorage.getItem('TODOs'));
    const ul = getElement('todo-list');
    ul.innerHTML=``;
    todos.forEach(item => {
        console.log(item);
        const li = document.createElement('li');
        li.classList.add('py-3');
        li.innerText = item.title;
        ul.appendChild(li);
    });

}
render();

const clearAll =()=>{
    localStorage.removeItem('TODOs');
    render();
}

