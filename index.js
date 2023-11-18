

//save user info

let userList = []

const addUser = (ev) => {
  ev.preventDefault();
  let user = {
    name: document.getElementById('username').value,
    password: document.getElementById('passW').value
  }

  userList.push(user);

  document.forms[0].reset();


  //only for display and see if it works
  console.warn('added', { userList });
  let pre = document.querySelector('#msg pre');
  pre.textContent = '\n' + JSON.stringify(userList, '\t', 2);


  //save to local storage
  localStorage.setItem('userList', JSON.stringify(userList));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addUser);
});
