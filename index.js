//save user info



export default function addUser() {
  let userList = []
  let user = {
    name: document.getElementById('username').value,
    password: document.getElementById('passW').value
  }

  userList.push(user);

  document.forms[0].reset();


  //only to see if it works
  console.warn('added', { userList });
  
  
  //save to local storage
  localStorage.setItem('userList', JSON.stringify(userList));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addUser);
})
;
