import { useState } from "react";
import Reimbursements from "../models/reimbursement";
import "../styles/reimbursement.css"
import User from "../models/users";

interface IReim {
    currentUser: User | undefined
}
export default function Reimbursement(props: IReim){
    const [reimbursements, setReimbursement] = useState<{[key: string]: Array<Reimbursements>}>();
    // reimbursement: [re1,re2,re3]

    let updateTable = async () => {
        // check at login that it sends the user to the right Reimbursement page
        // server sends token to user to keep in "local storage"

        // pull the index for now

        // token = if manager or employee

        //grabs all reimbursements
        console.log("inside updateTable function")
        
        try{
            let responseX = await fetch('http://localhost:3000/reimbursement/', {
                method: 'GET',
                headers: {
                    'Authorization': `${props.currentUser?.token}`,
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

    let updateElement = async (value:number, m_status: string) =>{
        let response = await fetch('http://localhost:3000/reimbursement/', {
                method: 'GET',
                headers: {
                    'Authorization': `${props.currentUser?.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: value, status: m_status})
                
            })
    }
    return(
    
        reimbursements ?
        <>
            {/* {console.log(reimbursements["reimbursement"][0].id)} */}
            <h2 className="table-header">Welcome to the table</h2>
            <div className="table-container">
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
                                            <><td><button>approve/deny</button></td></>
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
            <button className="test" onClick={updateTable}>update</button>
        </>
    );
}