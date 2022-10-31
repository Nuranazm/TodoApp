let localData = JSON.parse(localStorage.getItem("todos"))

let data = localData ? [...localData]  : [];



const createTodoItem = ({
    id,
    task,
    deadline,
    done
}) => {
    let li = document.createElement('li')


    let deleteBtn = document.createElement('img')
    deleteBtn.id = `${id}`
    deleteBtn.className ='deleteBtn'
    deleteBtn.src='./image/delete.png'
    deleteBtn.addEventListener('click',onDelete)

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change',onDone)
    checkbox.checked = done
    checkbox.setAttribute('unId', id,)

    let txt = document.createTextNode(`${deadline} ${task}`)
    let label = document.createElement('label')
    label.className = done && "taskDone"
    label.append(txt)
    

    li.append(label)
    li.append(checkbox)
    li.append(deleteBtn)
    list.append(li)
}

function renderTodos() {
    list.innerHTML=''
 data.map((todoItem) => {
    createTodoItem(todoItem)
 });

    
}
last_id = localData && localData.length && localData[localData.length -1].id + 1;
let counter = localData ? last_id : 0;

function onAdd () {
    let newTask = texIn.value
    if(newTask !== ''){
      texIn.value = "";
      data.push({
        id:counter++,
        task:newTask,
        deadline:dateInput.value,
        done:false
      });
      localStorage.setItem("todos",JSON.stringify(data))
      renderTodos();
      }else {
        alert("no")
      }
}

function onDelete(e) {
//    e.target.parentElement.remove()//кнопка удаления
//    console.log(e.target.id)
   let currentId = Number(e.target.id)
   let filteredArray = data.filter(el => el.id !== currentId)
   data = filteredArray
   localStorage.setItem("todos",JSON.stringify(data))
   renderTodos()
//    console.log(filteredArray)
}

  function onDone(e) {
//    e.target.checked
//     if(e.target.checked) {
//         e.target.parentElement.classList.add('done')
//     }else{
//         e.target.parentElement.classList.remove('done')
//     }

let currentId = Number(e.target.getAttribute('unId'))
// console.log(e.target.getAtribute('unId'))
let  modifiedArray = data.map(el => {
  if( el.id === currentId ) {
    el.done = !el.done
    renderTodos()
  }
  return el
})
data = modifiedArray
localStorage.setItem("todos",JSON.stringify(data))
}

addBtn.addEventListener('click',onAdd)

texIn.addEventListener('keyup',(e) => {
    // console.log(e)
    if(e.key === 'Enter') {
        onAdd();
    }
})
renderTodos()


//JSON. parse() берет строку JSON и трансформирует ее в объект JavaScript. 
//JSON. stringify() берет объект JavaScript и трансформирует его в строку JSON.
//setItem(key, value) – сохранить пару ключ/значение. 
//getItem(key) – получить данные по ключу key 
//setAttribute - это когда мы к какому нибудь метку атрибуту добавляем атрибут(ключ, значение)




