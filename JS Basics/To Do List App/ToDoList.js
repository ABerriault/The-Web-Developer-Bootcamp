console.log("Connected")

var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    // Handle the input
    if (input === "list"){
        listTodos();
    } else if (input === "new"){
        newTodo();
    } else if (input === "delete"){
       deleteTodo();
    }
    
    // Ask again
    input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app.");


function listTodos() {
    // list all the todos from the todos array
    todos.forEach(function(todo, i){
        console.log(i + " " + todo);
    });
}

function newTodo() {
    var newTodo = prompt("Enter new todo");
    // Add todos to list
    todos.push(newTodo);
}

function deleteTodo() {
     // Ask for index
     var index = prompt("Choose the index of todo to delete");
     todos.splice(index,1); // Removes 1 item at index
}