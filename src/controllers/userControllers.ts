import { IUsersLogin } from "../models/IUsers";

export class UserControllers {
    public URLbase: string;

    constructor(URLbase: string)  {
        this.URLbase = URLbase;
    };

    async login(email:HTMLInputElement, password: HTMLInputElement): Promise<any>{
        const userdata: IUsersLogin = {
            email: email.value,
            password: password.value
        };
        const headers: Record<string,string> = {
            'accept': '*/*',
            'Content-Type': 'application/json' 
        };
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userdata) // Transformamos la información del usuario a formato JSON
        };
        const response: Response = await fetch(`${this.URLbase}/????????`, requestOptions);

        if (!response.ok) {
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error (`Error de autenticación: ${response.status}: ${response.statusText}`);
        }
        const responseBodyLogin = await response.json();
        return responseBodyLogin;
    }
};