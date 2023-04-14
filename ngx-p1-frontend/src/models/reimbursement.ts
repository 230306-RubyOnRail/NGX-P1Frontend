export default interface Reimbursements{
    id: number;
    comment: string;
    status: string;
    price: number;
    approved_at: string;
    updated_at: string;
    created_at: string;

    
}
// constructor(id: number, comment: string, status: string, approved_at: string, updated_at: string, created_at: string, price: number){
//     this.id=id;
//     this.comment= comment;
//     this.status= status;
//     this.price = price;
//     this.approved_at = approved_at;
//     this.updated_at = updated_at;
//     this.created_at = created_at;
// }