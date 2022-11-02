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
  let userIdElement = document.getElementById("userId");
  let userIdValue = userIdElement.value;
  filterAndUpdateList((todo) => {
    return todo.userId == userIdValue;
  });
};

const completed = () => {
  filterAndUpdateList((todo) => {
    return todo.completed == true;
  });
};

const incompleted = () => {
  filterAndUpdateList((todo) => {
    return todo.completed == false;
  });
};

// UPDATE LIST FUNC -----------------------------------------

function filterAndUpdateList(listFilter) {
  clearList();
  let filt = arrayOfTodos.filter(listFilter);
  for (let i = 0; i < filt.length; i++) {
    let newListItem = document.createElement("LI");
    newListItem.innerText = filt[i].title;
    ol.appendChild(newListItem);
  }
}
