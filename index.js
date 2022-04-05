/* Count Items left */
const itemCount = document.querySelector('.count span');
const mobCount = document.querySelector('.mob-count span');

itemCount.innerText = document.querySelectorAll('.list').length;
mobCount.innerText = document.querySelectorAll('.list').length;


/* Change Theme */
const themeIcon = document.querySelector('.theme');

themeIcon.addEventListener('click',()=>{
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')){
        themeIcon.src = 'images/icon-moon.svg'
    }else{
        themeIcon.src = 'images/icon-sun.svg'
    }
})

/*Add items */
const addButton = document.querySelector('.todo-input button');
const itemInput = document.getElementById('todo-input');
const todo = document.querySelector('.todos ul');
const itemID = document.querySelector('.filters input[type="radio"]:checked');

addButton.addEventListener('click',()=>{
    if(itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

itemInput.addEventListener('keypress',(event)=>{
    if(event.charCode === 13 && itemInput.value.length > 0){
        addItems(itemInput.value);
        itemInput.value = '';
    }
})

function addItems(text){
    const item = document.createElement('li');
    item.innerHTML = 
    `
    <label class="list">
    <input class="checkbox" type="checkbox"> 
    <span class="text">${text}</span>
    </label>
    <span class="remove"></span>
    `;
    if(itemID.id === 'completed'){
        item.classList.add('hidden');
    }
    todo.append(item);
    updateCount(1);
}

function updateCount(num) {
    itemCount.innerText = +itemCount.innerText + num;
}

/*remove items */
function removeItems(item){
    item.remove();
    updateCount(-1);
}

todo.addEventListener('click',(event)=>{
    if(event.target.classList.contains('remove')){
        removeItems(event.target.parentElement);
    }
})

/*Filters */
document.querySelectorAll('.filters input').forEach(radio =>{
    radio.addEventListener('change',(event)=>{
        filterTodo(event.target.id);
    })
})

function filterTodo(id){
    const allItems = document.querySelectorAll('li');


    switch(id){
        case 'all':
            allItems.forEach(item =>{
                item.classList.remove('hidden');
        })    
        break;
        case 'active':
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.add('hidden')
                }else{
                    item.classList.remove('hidden')
                }
        })
        break;
        default:
            allItems.forEach(item =>{
                if(item.querySelector('input').checked){
                    item.classList.remove('hidden')
                }else{
                    item.classList.add('hidden')
                }
            })
            break;
    }
}

/*clear items */
const clear = document.querySelector('.clear');
const mobClear = document.querySelector('.mob-clear');

clear.addEventListener('click',()=>{
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    })
})
mobClear.addEventListener('click',( ) => {
    const itemChecked = document.querySelectorAll('.list input[type="checkbox"]:checked');
    itemChecked.forEach(item=>{
        removeItems(item.closest('li'));
    })
})

/*reorder list */
Sortable.create(simpleList);









