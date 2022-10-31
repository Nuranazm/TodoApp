let main = document.createElement('main')
main.className = 'container'
document.body.append(main)

let projectNanme = document.createElement('h1')
projectNanme.innerHTML='Lets do it'
main.append(projectNanme)

let block = document.createElement('div')
block.className = 'mainBlock'
main.append(block)

let inputBlock = document.createElement('div')
block.append(inputBlock)

let texIn = document.createElement('input')
texIn.className ='texIn'
texIn.setAttribute('placeholder', 'Gonna do')
inputBlock.append(texIn)

let dateInput = document.createElement('input')
dateInput.setAttribute('type','date')
inputBlock.append(dateInput)

let addBtn = document.createElement('button')
addBtn.id = 'addBtn'
addBtn.innerHTML = 'Add'
inputBlock.append(addBtn)

let list = document.createElement('ul')
list.id = 'list'
block.append(list)




