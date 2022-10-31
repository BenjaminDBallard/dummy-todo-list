// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

//base variables ----------------------------------------

let ol = document.getElementById("todo-list");

//fetches Array -----------------------------------------

const fetchTodos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => (arrayOfTodos = json));
};

//console logs array ------------------------------------

const logTodos = () => {
  console.log(arrayOfTodos);
};

//clears existing list ----------------------------------

const clearList = () => {
  //clear existing list
  ol.remove();
  let olContainer = document.getElementById("list-container");
  olContainer.innerHTML = "<ol id='todo-list'></ol>";
  ol = document.getElementById("todo-list");
};

//populates list ----------------------------------------

const populateTodos = () => {
  clearList();

  for (let i = 0; i < arrayOfTodos.length; i++) {
    let newListItem = document.createElement("LI");
    newListItem.innerText = arrayOfTodos[i].title;
    ol.appendChild(newListItem);
  }
};

//filter ------------------------------------------------

const filterTodos = () => {
  clearList();

  let userIdElement = document.getElementById("userId");
  console.log("userIdElement:", userIdElement);

  let userIdValue = userIdElement.value;
  console.log("userIdValue:", userIdValue);

  let filteredTodos = arrayOfTodos.filter((todo) => {
    console.log(todo.userId == userIdValue);
    return todo.userId == userIdValue;
  });
  console.log("fliteredTodos:", filteredTodos);

  for (let i = 0; i < filteredTodos.length; i++) {
    let newListItem = document.createElement("LI");
    newListItem.innerText = filteredTodos[i].title;
    ol.appendChild(newListItem);
  }
};

const completed = () => {
  clearList();

  let complete = arrayOfTodos.filter((todo) => {
    console.log(todo.completed == true);
    return todo.completed == true;
  });
  console.log("complete:", complete);

  for (let i = 0; i < complete.length; i++) {
    let newListItem = document.createElement("LI");
    newListItem.innerText = complete[i].title;
    ol.appendChild(newListItem);
  }
};

const incompleted = () => {
  clearList();

  let incomplete = arrayOfTodos.filter((todo) => {
    console.log(todo.completed == false);
    return todo.completed == false;
  });
  console.log("Incomplete:", incomplete);

  for (let i = 0; i < incomplete.length; i++) {
    let newListItem = document.createElement("LI");
    newListItem.innerText = incomplete[i].title;
    ol.appendChild(newListItem);
  }
};
