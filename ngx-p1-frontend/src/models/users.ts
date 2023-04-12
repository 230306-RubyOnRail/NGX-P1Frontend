export default class User{
    id: number;
    name: string;
    token: string;
    password: string;
    email:string;
    manager: boolean;

    constructor(id: number, name: string, token: string, password: string, email: string, manager: boolean){
        this.id= id;
        this.name= name;
        this.token= token;
        this.password= password;
        this.email = email;
        this.manager = manager;
    }
}