const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList()

function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject
        if(todoObject){
            const html = `
            <div>${name}</div>
            <div>${dueDate}</div>    
            <button class="delete-button js-delete-button">Delete</button>          
            `;
            todoListHTML += html;
        }
    })

    document.querySelector('.js-todo-list').innerHTML = todoListHTML
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1); 
            renderTodoList(); saveToStorage();
        })
    })
}

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo()
})

function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const dateInputElement = document.querySelector('.js-date-input')
    const name = inputElement.value
    const dueDate = dateInputElement.value
    todoList.push({
        name, 
        dueDate
    })
    
    inputElement.value = ''    
    renderTodoList()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem('todoList', JSON.stringify(todoList))
}