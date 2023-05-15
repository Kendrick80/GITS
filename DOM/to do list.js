const addTask= document.getElementById("add-task")
const taskContainer= document.getElementById("task-container")
const inputTask= document.getElementById("input-task")

addTask.addEventListener('click',function(){
    let task=document.createElement("div");
    task.classList.add('task');
    let li =document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);

    let checkTask = document.createElement("button")
    checkTask.innerHTML='<i class="fa-solid fa-check"></i>';
    checkTask.classList.add("checkTask");
    task.append(checkTask)

    let deleteTask = document.createElement("button")
    deleteTask.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    deleteTask.classList.add("deletekTask");
    task.appendChild(deleteTask)

if(inputTask.value===""){
    alert("Please Enter a Task");
}else{
    taskContainer.appendChild(task);
}
inputTask.value=" ";

checkTask.addEventListener("click",function(){
    checkTask.parentElement.style.textDecoration="line-through";
})
deleteTask.addEventListener("click",function(e){
    let target = e.target;
    target.parentElement.parentElement.remove();
})

})
