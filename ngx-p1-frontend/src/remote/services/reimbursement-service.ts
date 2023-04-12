import {appAuth }from "../auth-services"
export const approveDeny = (id: number, status: string) => {
    let body:any = {
        'status': `${status}`,
        'id': `${id}`
    }
    return appAuth.put(`reimbursement/${id}`,body)
}
export const deleteTable = (id: number) => {
    let body:any ={
        'id': `${id}`
    }

    return appAuth.delete(`reimbursement/${id}`,body)
}
export const getReimbursements = async (id:number) =>{
    return appAuth.get(`reimbursement/${id}`)
}
export const postSubmit =(comment:string|undefined, price:number|undefined, id:number|undefined) => {
    let body: any = {
        'comment': `${comment}`,
        'price': `${price}`
    }
    return appAuth.post(`reimbursement/${id}`, body)
}

