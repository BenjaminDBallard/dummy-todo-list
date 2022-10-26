    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        let ol = document.getElementById('todo-list')

        for (let i=0; i<arrayOfTodos.length; i++){
            let newListItem = document.createElement("LI")
            newListItem.innerText = arrayOfTodos[i].title
            ol.appendChild(newListItem);
        }
    }



    // get ol element to put todos in
    // loop throuh arrayOfTodos
    // create li element
    // create text node to put title proporty
    // append text to li element
    // append li element to ol