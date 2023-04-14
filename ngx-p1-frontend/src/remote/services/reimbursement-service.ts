import User from "../../models/users"
import {appAuth }from "../auth-services"
export const approveDeny = (id: number, status: string) => {
    let body:any = {
        'status': `${status}`,
        'id': `${id}`
    }
    return appAuth.put(`reimbursement/${id}`,body)
}
export const updateComment = (id: number, comment: string) => {
    let body:any = {
        'comment': `${comment}`,
        'id': `${id}`
    }
    return appAuth.put(`reimbursement/${id}`,body)
}
export const deleteTable = (id: number) => {
    return appAuth.delete(`reimbursement/${id}`)
}
export const getReimbursements = async (currentUser: User|undefined) =>{
    
    return appAuth.get(`reimbursement/${currentUser?.id}`)
}
export const postSubmit =(comment:string|undefined, price:string|undefined, id:number|undefined) => {
    let body: any = {
        'comment': `${comment}`,
        'price': `${price}`
    }
    return appAuth.post(`reimbursement/${id}`, body)
}

