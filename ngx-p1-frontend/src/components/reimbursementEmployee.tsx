import {useEffect, useState} from "react";
import User from "../models/users";
import {deleteTable, getReimbursements} from "../remote/services/reimbursement-service"
import Reimbursements from "../models/reimbursement";

interface iUser{
    currentUser: User | undefined
}
export default function ReimbursementEmployee(props: iUser){
    const [employeeTable, setEmployeeTable] =  useState<{[key: string]: Array<Reimbursements>}>();


    useEffect(()=>{
        console.log('Use effect is triggered');
        updateEmployee();
        return function(){
            console.log('Use effect cleanup (unmounting component)');
        }
    },[])


    let updateEmployee = async() => {
        console.log("inside updateEmployee function")

        try{
            console.log(props.currentUser)
            let response = await getReimbursements(props.currentUser)
            if (response.status === 200) {
                setEmployeeTable(response.data);
                console.log(response.data);
            } else {
                console.log('Unable to retrieve to dos.');
            }
        }catch(err){
           
        }
    }
    return(
        employeeTable ?
        <>
            <div className="table-container">
                <h2 className="table-header">My Reimbursements</h2>
                <table className="reimbursement-info">

                    <thead>
                    <tr>
                        <th>id</th>
                        <th>comment</th>
                        <th>status</th>
                        <th>price</th>
                    </tr>
                    </thead>
                    <tbody className="body-reimbursement">
                    {
                        employeeTable["reimbursement"].map( (re) => {

                            return(
                                <tr key={re.id} className="record">
                                    <td>{re.id}</td>
                                    <td>{re.comment}</td>
                                    <td>{re.status}</td>
                                    {/*<td>{re.price}</td>*/}
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
    )

}