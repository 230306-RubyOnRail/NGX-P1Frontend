import { useState } from "react";
import Reimbursements from "../models/reimbursement";
import User from "../models/users";

interface IReim {
    currentUser: User | undefined
}
export default function Reimbursement(props: IReim){
    const [reimbursements, setReimbursement] = useState<Reimbursements[]>();

    let updateTable = async () => {
        // check at login that it sends the user to the right Reimbursement page
        // server sends token to user to keep in "local storage"

        // pull the index for now

        // token = if manager or employee

        //grabs all reimbursements
        console.log("inside updateTable function")
        
        try{
            let response = await fetch('http://localhost:3000/reimbursement/', {
                method: 'GET',
                headers: {
                    'Authorization': `${props.currentUser?.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: 2, status: 'denied'})
                
            })
            setReimbursement(await response.json())
            // if token == manager // employee
        }catch(err){

        }
        
    }

    return(
        // <>
        //     {console.log("inside Table component")}
        //     <button className="test" onClick={updateTable}>update</button>
        //     {reimbursements}
        // </>
        reimbursements ?
        <>
            <h2 className="table-header">Welcome to the table</h2>
            <div className="table-container">
                <table className="reimbursement-info">
                    <tbody className="body-reimbursement">
                    {   
                        reimbursements.map(re => {
                            return(
                                <>
                                    <tr>re.id | re.comment | re.status</tr>
                                </>
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