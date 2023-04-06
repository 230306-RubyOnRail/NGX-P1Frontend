export default class User{
    id: number;
    token: string;
    password: string;
    email:string;
    role: string;

    constructor(id: number, token: string, password: string, email: string, role: string){
        this.id=id;
        this.token= token;
        this.password= password;
        this.email = email;
        this.role = role;
    }
}