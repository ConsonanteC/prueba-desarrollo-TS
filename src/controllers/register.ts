import {IUsersRegister} from "../models/IUsers"

const formRegister = document.querySelector("#formRegister") as HTMLFormElement;
const nameRegister = document.querySelector("#name") as HTMLInputElement;
const emailRegister = document.querySelector("#email") as HTMLInputElement;
const passwordRegister = document.querySelector("#password") as HTMLInputElement;

formRegister.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    userRegister()
});

async function userRegister() {
    const user:IUsersRegister = {
        name: nameRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value
    };

    if (!user.name || !user.email || !user.password) {
        alert("todos los campos deben rellenarse")
    } else {
        alert("Se registró correctamente")
        window.location.href = "../views/home.html"
    }
}
