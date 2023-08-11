const taskTitle = document.querySelector('#task-title')
const taskDate = document.querySelector('#task-date')
const taskDescription = document.querySelector('#task-description')
const taskBtn = document.querySelector('.task-button')
const listTask = document.querySelector('.list-task')
const editTask = document.querySelector('#edit-task')
const deleteTask = document.querySelector('#delete-task')
const modalDelete = document.querySelector('.modal-delete')
const deleteBtn = document.querySelector('.delete-btn')
const backBtn = document.querySelector('.back-btn')




let tasks = []
function renderTask() {
    listTask.innerHTML = ''; 

    tasks.forEach((val, index) => {
        const list = document.createElement('div')
        list.innerHTML = `<div class="list">
        <div class="top-section">
            <p class="task-title-render">
                ${val.title}
            </p>
            <p class="task-date-render">
            ${val.date}
            </p>
        </div>
        <p class="task-description-render">
            ${val.description}
        </p>
        <div class="options">
            <i class="fa-regular fa-pen-to-square" id="edit-task" onclick="editIndex(${index})"></i>
            <i class="fa-sharp fa-solid fa-trash delete-task" id="delete-task" onclick="showModal(${index})" data-index="${index}"></i>
        </div>
    </div>`
        listTask.appendChild(list) 
    })
};

function showModal(index) {
    modalDelete.style.visibility = 'visible';
    modalDelete.style.display = 'grid';
    const listIndex = index;
    getIndex(listIndex);
  }
  
  function getIndex(index) {
    const listIndex = index;
    deleteBtn.addEventListener('click', () => {
      deleteListTask(listIndex);
      modalDelete.style.display = 'none';
    });
  }

  function deleteListTask(index) {
    tasks.splice(index, 1);
    renderTask();
  }


backBtn.addEventListener('click', ()=> {
    modalDelete.style.display = 'none'
})
function getList() {
    if (!taskTitle.value || !taskDate.value || !taskDescription.value) {
        alert('Please input all the ff. fields.')
    }else {
        const title = taskTitle.value
        const date = taskDate.value
        const description = taskDescription.value
        tasks.push({ title, date, description});
        taskTitle.value = '';
        taskDate.value = ''
        taskDescription.value = '';
        renderTask()
        console.log(tasks);
    }
}
taskBtn.addEventListener('click',  getList)

function editIndex(index) {
    const listIndex = index
    
    taskTitle.value = `${tasks[listIndex].title}`
    taskDate.value = `${tasks[listIndex].date}`
    taskDescription.value = `${tasks[listIndex].description}`

    tasks.splice(listIndex, 1)
  
 };
