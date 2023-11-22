//kunna hämta användare så att man kan välja vem man spelar mot
import userInput from "./index.js";
import { getAllUsers, getOneUser } from "./server-request.js";
console.log(await getAllUsers())
console.log(await getOneUser())
//skriv await för att hämta, ligger await funktionen i en annan funktion måste den funktionen vara en async
//om en async funktion används i en eventListener måste eventListeners funktion också vara async t.ex. "addEventListener("click", async funktion(event){...})"
console.log(userInput())


