import {appAuth }from "../auth-services"

export const addUser = (name: string | undefined, email:string | undefined, password:string | undefined, manager:boolean | undefined) => {
    let body:any ={
        'name': `${name}`,
        'email': `${email}`,
        'password': `${password}`,
        'manager': `${manager}`
    }

    return appAuth.post(`user/new`,body)
}