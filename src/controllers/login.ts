import { IUsersLogin } from "../models/IUsers"
import { UserControllers } from "./userControllers";

// traemos la IP o dominio (números) y agrego /api/v1 porque no cambia en ninguna ruta, ára luego conectarlo con el endpoint de la clase
const URL_USER: string = "";
const formLogin = document.querySelector("#formLogin") as HTMLFormElement;
const emailLogin = document.querySelector("#email") as HTMLInputElement;
const passwordLogin = document.querySelector("#password") as HTMLInputElement;

formLogin.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    userLogin()
});

async function userLogin() {
    const user:IUsersLogin = {
        email: emailLogin.value,
        password: passwordLogin.value
    };

    const crudUser = new UserControllers(URL_USER);
    const respuesta = await crudUser.login(emailLogin, passwordLogin);
    // dependiendo de la respuesta de la API yo poría manejar la información para almacenarla en en localStorage

    if (!user.email || !user.password) {
        alert("todos los campos deben rellenarse")
    } else {
        alert("Ingresó correctamente")
        window.location.href = "../views/home.html"
    }
}
