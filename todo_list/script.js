input = document.getElementById('in')
btn = document.getElementById('btn')
todolist = document.getElementById('todo-list')
window.onload = ()=>{
   todos =  JSON.parse(localStorage.getItem('todos')) || []
   todos.forEach(element => {
    addtodo(element)
   });
}
todos = [];

input.addEventListener('keyup',function(event){
    if(event.key =='Enter'){
        btn.click();
    }
})

btn.addEventListener('click',()=>{
    inp = input.value;
    todos.push(inp);
    localStorage.setItem('todos',JSON.stringify(todos));
    addtodo(inp);
    input.value = '';
    
})
function addtodo(inputVal){
    if (inputVal) {
        
        let para = document.createElement('h2');
        para.innerText = inputVal;
        todolist.appendChild(para);
        para.addEventListener('click',()=>{
            if(para.style.textDecoration == "line-through"){
                para.style.textDecoration = 'none';
                para.style.color = 'white';
                todos.push(inputVal);
                localStorage.setItem('todos',JSON.stringify(todos));
            }
            else{
                remove(inputVal,para);
            }
        })
        para.addEventListener('dblclick',()=>{
            todolist.removeChild(para)
            dblremove(inputVal,para);
        })
        // para.addEventListener('click')

        // }
    }
 }
function remove(val,p){
    p.style.textDecoration = 'line-through';
    p.style.color = 'green';
    index = todos.indexOf(val)
    if (index>-1)
        {
            todos.splice(index,1)
        }
        localStorage.setItem('todos',JSON.stringify(todos));
}
function dblremove(val,p){
    index = todos.indexOf(val)
    if (index>-1)
    {
        todos.splice(index,1)
    }
    p.remove();
    localStorage.setItem('todos',JSON.stringify(todos));
}
