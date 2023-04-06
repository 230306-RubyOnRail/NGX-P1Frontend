export default class Reimbursements{
    id: number;
    comment: string;
    status: string;
    approved_at: string;
    updated_at: string;
    created_at: string;

    constructor(id: number, comment: string, status: string, approved_at: string, updated_at: string, created_at: string){
        this.id=id;
        this.comment= comment;
        this.status= status;
        this.approved_at = approved_at;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}