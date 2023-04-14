import { useEffect, useState } from "react";
import Reimbursements from "../models/reimbursement";
import "../styles/reimbursement.css"
import User from "../models/users";
import {approveDeny, deleteTable} from "../remote/services/reimbursement-service"
interface iUser {
    currentUser: User | undefined
}
export default function Reimbursement(props: iUser){
    const [reimbursements, setReimbursement] = useState<{[key: string]: Array<Reimbursements>}>();
    const [status, setStatus] = useState<{id: Number, status: string}>()
    const [id, setId] = useState<number>()
    
    useEffect(()=>{
        console.log('Use effect is triggered');
        updateTable();
        return function(){
            console.log('Use effect cleanup (unmounting component)');
        }
    }, [status, id])

    let approveDenyToTable = (id: number, status: string) =>{
        approveDeny(id, status);
        setStatus({id, status})
        // updateTable();
    }
    let contentDelete = (id:number) =>{
        setId(id)
        deleteTable(id)
        updateTable()
    }
    let updateTable = async () => {
        // check at login that it sends the user to the right Reimbursement page
        // server sends token to user to keep in "local storage"

        // pull the index for now

        // token = if manager or employee

        //grabs all reimbursements
        console.log("inside updateTable function")
        
        try{
            let responseX = await fetch(`http://localhost:3000/reimbursement/`, {
                method: 'GET',
                headers: {
                    'Authorization': `${sessionStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
                // body: JSON.stringify({id: 2, status: 'denied'})
                
            })
            if(responseX.status >= 200){
                // if status is a 200+ then set reimbursement
                const result = await Promise.allSettled([responseX.json()])
                const response = result.filter((res) => res.status === 'fulfilled') as PromiseFulfilledResult<any>[];

                const des = response[0].value
                setReimbursement(des)
                
                // console.log(resp)
            }
            
            // if token == manager // employee
        }catch(err){

        }
        
    }
    return(
    
        reimbursements ?
        <>
            {/* {console.log(reimbursements["reimbursement"][0].id)} */}
            <div className="table-container">
            <h2 className="table-header">Welcome to the table</h2>
                <table className="reimbursement-info">
                    
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>comment</th>
                                <th>status</th>
                                <th>approve/deny</th>
                            </tr>
                        </thead>
                        <tbody className="body-reimbursement">
                        {
                            reimbursements["reimbursement"].map( (re) => {

                                return(
                                    <tr key={re.id} className="record">
                                        <td>{re.id}</td>
                                        <td>{re.comment}</td>
                                        <td>{re.status}</td>
                                        
                                        <>
                                            {/* approve and update */}
                                            <td><button onClick={() =>{approveDenyToTable(re.id, 'approve')}}>approve</button></td>
                                            <td><button onClick={() =>{approveDenyToTable(re.id, 'deny')}}>deny</button></td>
                                        </>
                                        {/* delete */}
                                        <td><button onClick={() =>{contentDelete(re.id)}}>DELETE</button></td>
                                    </tr> 
                                );
                            }) 
                        }
                        </tbody>
                </table>
            </div>
        </>
        :
        <>
            
        </>
    );
}