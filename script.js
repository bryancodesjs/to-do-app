let inputField = document.getElementById('inputField');
let addItem = document.getElementById('addToDo');
let itemWrapper = document.getElementById('toDoContainer');


/*I will add an event listener to the button, so when it is
clicked it will trigger a function*/
addItem.addEventListener('click', function() {
    if (inputField.value === "") { // si el campo esta vacio, entonces...
        document.getElementById('tooltip').style.display = "block"; //error msj
        return false;
    } else if (inputField.value != "") { //si el campo no esta vacio...
        document.getElementById('tooltip').style.display = "none"; //no mostrar tooltip
        
        var item = document.createElement('p'); //crea un <p>
        var deleteItem = document.createElement('button'); //crea un <button>
        var itemWrap = document.createElement('div')//crea un <div>
        itemWrap.classList.add('task-item-wrap');//agrega una clase al <div>
        item.classList.add('task-item'); //agrega una clase al <p>
        item.innerText = inputField.value;//rellena el <p> con la info introducida en input
        document.getElementById('emptyAll').style.display = "none"; //ocultar imagen de pantalla vacia
        itemWrap.addEventListener('dblclick', function (event) {
            alert('double click!');
        })

        deleteItem.innerText = 'Eliminar'; //rellena el boton de borrado 
        deleteItem.classList.add('btn', 'btn-danger'); //agrega una clase al boton de borrado
        deleteItem.addEventListener('click', function() {
            this.parentElement.remove();
            console.log('borraste una nota');
        })
        itemWrapper.appendChild(itemWrap); //incrusta el div dentro de 'toDoContainer'
        itemWrap.appendChild(item); //incrusta el <p> dentro del <div>
        inputField.value = ""; //limpia el input una vez la nota ha sido creada
        itemWrap.addEventListener('click', function () { //si se hace click sobre el <div>, entonces...
            item.style.textDecoration = "line-through"; //tachar el contenido de <p>
            itemWrap.classList.add('completed'); //agregar clase 'completed' a <p>
            itemWrap.appendChild(deleteItem); //agregar boton de borrado
        })
        
        
    }
})

inputField.addEventListener('keyup', function(event) { //cuando se presione una tecla...
    if (event.keyCode === 13) { //si la tecla es 'enter'...
        addItem.click(); //causa un click sobre el boton 'addItem'
        event.preventDefault();
    }
})

