import { getAllUsers, addUser } from "./server-request.js";

//save user info

let userList = await getAllUsers()
console.log(userList)

let user = await addUser()
console.log(user)



const newUser = (event) => {
  console.log(event)
  event.preventDefault();

  
  let user = {
    id: 1,
    username: document.getElementById('username').value,
    password: document.getElementById('passW').value,
    matchHistory: []
  }
  
  userList.push(user);
  
  document.forms[0].reset();

  console.warn('added', { userList });
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(userList, '\t', 2);
  window.location.pathname = "/welcome.html"
}


document.getElementById('btn').addEventListener('click', function (event) {
  newUser(event)

});




/*
//Denna funkar men den går inte in i listan, sidenote: något har blivit fel nu i programmet som gör att man måste klicka login två gånger om man använder denna

function userInput() {
  const newUser = [];


  const username = document.getElementById("username");
  const password = document.getElementById("passW");

  const usernameV = username.value;
  const passwordV = password.value;

  newUser.push(usernameV, passwordV);
  console.log(newUser)

  
  window.location.pathname = "/welcome.html"

}
document.getElementById('btn').addEventListener('click', function (event) {
  userInput(event)
})

*/