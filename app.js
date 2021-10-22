import {todos, users} from './data.js'


//1. Create an alert that lists all users, with their ids, names and what city they're from
const allUsers = []
users.map(user => {
    allUsers.push(`user id :${user.id}, name: ${user.name}, city: ${user.address.city} \n`)
})
// alert(allUsers);


// -----------------------------------------------------------------------------------------------
// Prompt the user for a user id
const userIdInput = prompt('Please provide us with your Id (choose a number between 1 to 10)');


// challenge1,2: After you select a user, add the option to show the todos, add a new todo, update or delete the todo
const userTodoInput = prompt('Select one of the option below (select one number please!): \n  1.See my todos \n 2.add a new todo \n 3.update my todo \n 4.delete my todo \n 5.Stop the programm' );



// I created this array to push some obj inside of it and can reference it into my if/else statements.(global)
const allInfo = [];


// get the user's name based on the id they entered
let nameOfUser = '';
for(let user of users){
    if(user.id === Number(userIdInput)){
        nameOfUser += user.username
    }
}


// get all the todos of the user based on the id they entered
const allUsersTodo = todos.filter(todo => {
    return todo.userId === Number(userIdInput)
})
allInfo.push({'allUserToDo' :allUsersTodo});


// get the title of all the todos that the user should do
const todosTitle = allUsersTodo.map(todo => {
    return `${todo.title}\n`
});
allInfo.push({'title' :todosTitle})
console.log(`todos title \n: ${todosTitle}`);



// if user wants to see his/her todos=================================================
if(Number(userTodoInput) === 1){
    // get the result
    alert(`This is the todo list of "${nameOfUser}" : \n  ${allInfo[1]["title"]}`);
    // const continueProgramm = prompt('Do you want to continue(1) or stop(2)?')
    // contOrStop(continueProgramm);
}
// if user wants to add a new todos==================================================
else if(Number(userTodoInput) === 2){
    const newTodo = prompt('Please add your new todo(type sth please)..');

    const newTodoObj = {
        id: allInfo[1]["title"].length + 1,
        userId: Number(userIdInput),
        title: newTodo,
        completed: false
    }
    // update our obj with new todo
    todos.push(newTodoObj);
    allInfo[1]["title"].push(newTodo);
    allInfo[0]["allUserToDo"].push(newTodoObj);
    console.log(`New list of todo title \n :${allInfo[1]["title"]}`)
}
// if user wants to update one of its todos===========================================
else if(Number(userTodoInput) === 3){
    const showtodos = allUsersTodo.map(el=> {
        return `${el.id} : ${el["title"]} \n`
    })
    // save previous todo that user wants to update
    let previousTodo = prompt(`This is the list of your todos, please write the id of a todo you want to update.(write a number) \n ${showtodos}`);
    // save the new update todo
    let changedTodo = prompt(`write your updated todo`);

    // find previous todo that user wants to change based on the id that  user entered
    let prevTodo = allUsersTodo.find(el => {
        return el.id === Number(previousTodo)
    });
    
    // replace new updated todo with previous todo
    const newArr = allUsersTodo.map(el => {
        if(el["title"] === prevTodo["title"]){
            return el["title"] = changedTodo
        }
    })
    // show updated allusertodo array with updated todo
    console.log(allUsersTodo)
    console.log( `new updated todo: \n ${prevTodo["title"]}`);
}
// if user wants to delete a todo====================================================
else if(Number(userTodoInput) === 4){
    const showtodosDelete = allUsersTodo.map(el=> {
        return `${el.id} : ${el["title"]} \n`
    })
    let previousTodoDelete = prompt(`This is the list of your todos, please write the id of a todo you want to delete.(write a number) \n ${showtodosDelete}`);
    
    // find previous todo that user wants to delete in order to remove it from allUsersTodo array
    let prevTodoDelete = allUsersTodo.map(el => {
        if(el.id === Number(previousTodoDelete)){
            const idx = allUsersTodo.indexOf(el);
            return allUsersTodo.splice(idx,1)
        }
    });
    alert('Your todo is deleted!')
    // show new allUsersTodo array without a todo that were deleted
    console.log(allUsersTodo)
}
// if a user wants to stop the programm===============================================
else if(Number(userTodoInput) === 5){
    alert('Bye Bye')
    window.stop()
}
else{
    alert('Bye Bye')
}




// function contOrStop(num){
//     if(Number(num) === 1 ){
//         userIdInput = prompt('Please provide us with your Id');
//     }else{
//         window.stop()
//     }
// }
