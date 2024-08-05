import {IUsers} from "../models/IUsers.ts"

const formRegister = document.querySelector("#formRegister") as HTMLFormElement;
const nameRegister = document.querySelector("#name") as HTMLInputElement;
const emailRegister = document.querySelector("#email") as HTMLInputElement;
const passwordRegister = document.querySelector("#password") as HTMLInputElement;

formRegister.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    userRegister()
});

function userRegister() {
    const user:IUsers = {
        name: nameRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value
    };

    
}


