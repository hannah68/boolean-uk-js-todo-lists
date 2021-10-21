import {todos, users} from './data.js'


//1. Create an alert that lists all users, with their ids, names and what city they're from
const allUsers = []
users.map(user => {
    allUsers.push(`user id :${user.id}, name: ${user.name}, city: ${user.address.city} \n`)
})
// alert(allUsers);


// Prompt the user for a user id
const userIdInput = prompt('Please provide us with your Id');

// challenge1,2: After you select a user, add the option to show the todos, add a new todo, update or delete the todo
const userTodoInput = prompt('Select one of the option below (select one number please!): \n  1.See my todos \n 2.add a new todo \n 3.update my todo \n 4.delete my todo');


// I created this array to push some obj inside of it and can reference it into my if/else statements.(global)
const allInfo = [];

// get the user's name & todos ======================================================
let nameOfUser = '';
for(let user of users){
    if(user.id === Number(userIdInput)){
        nameOfUser += user.username
    }
}

// get all the todos of the user
const allUsersTodo = todos.filter(todo => {
    return todo.userId === Number(userIdInput)
})
allInfo.push({'allUserToDo' :allUsersTodo});
// console.log(allUsersTodo)

// get the title of all the todos that the user should do
const todosTitle = allUsersTodo.map(todo => {
    return `${todo.title}\n`
});
allInfo.push({'title' :todosTitle})
// console.log(todosTitle)


// if user wants to see his/her todos
if(Number(userTodoInput) === 1){
    // get the result
    alert(`This is the todo list of "${nameOfUser}" : \n  ${allInfo[1]["title"]}`);
}
// if user want to add a new todos
else if(Number(userTodoInput) === 2){
    const newTodo = prompt('Please add your new todo..');

    const newTodoObj = {
        id: allInfo[1]["title"].length + 1,
        userId: Number(userIdInput),
        title: newTodo,
        completed: false
    }
    todos.push(newTodoObj);
    allInfo[1]["title"].push(newTodo);
    allInfo[0]["allUserToDo"].push(newTodoObj);
    console.log(todos)
}
else if(Number(userTodoInput) === 3){
    const showtodos = allUsersTodo.map(el=> {
        return `${el.id} : ${el["title"]} \n`
    })
    let previousTodo = prompt(`This is the list of your todos, please write the id of a todo you want to update.(write a number) \n ${showtodos}`);
    // change your todo
    let changedTodo = prompt(`write your updated todo`);

    // find previous todo that user wants to change
    let prevTodo = allUsersTodo.find(el => {
        return el.id === Number(previousTodo)
    });
    
    // user updates its todo
   
    // add changedtodo to its object
    // prevTodo = changedTodo;
    const newArr = allUsersTodo.map(el => {
        if(el["title"] === prevTodo["title"]){
            return el["title"].replace(prevTodo["title"], changedTodo)
        }
        
        console.log( prevTodo["title"])
    })
    console.log(newArr)
}
else if(Number(userTodoInput) === 4){
    const showtodosDelete = allUsersTodo.map(el=> {
        return `${el.id} : ${el["title"]} \n`
    })
    let previousTodoDelete = prompt(`This is the list of your todos, please write the id of a todo you want to delete.(write a number) \n ${showtodosDelete}`);
    
    // find previous todo that user wants to delete
    let prevTodoDelete = allUsersTodo.map(el => {
        if(el.id === Number(previousTodoDelete)){
            const idx = allUsersTodo.indexOf(el);
            return allUsersTodo.splice(idx,1)
        }
    });
    
    
   
    console.log(prevTodoDelete)
    console.log(allUsersTodo)
}
else{
    alert('Bye Bye')
}



// console.log(allInfo)