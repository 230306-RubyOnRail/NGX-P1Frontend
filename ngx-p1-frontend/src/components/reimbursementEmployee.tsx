import {useEffect, useState} from "react";
import User from "../models/users";
import {deleteTable, getReimbursements, updateComment} from "../remote/services/reimbursement-service"
import Reimbursements from "../models/reimbursement";
import {Comment }from "./comment"

interface iUser{
    currentUser: User | undefined
}
export default function ReimbursementEmployee(props: iUser){
    const [employeeTable, setEmployeeTable] =  useState<{[key: string]: Array<Reimbursements>}>();
    const [isEditing, setIsEditing] = useState<{isEditing: boolean, re: any}>({isEditing: false, re: null});

    const startEdit = (r: Reimbursements) => {
        setIsEditing({isEditing: true, re: r.id})
    }
    const stopEdit =(id:number, comment: string) => {
        setIsEditing((editing) => ({...editing, isEditing: false}))
        // update
        console.log('update')
        updateComment(id, comment)
    }
    useEffect(()=>{
        console.log('Use effect is triggered');
        updateEmployee();
        return function(){
            console.log('Use effect cleanup (unmounting component)');
        }
    },[isEditing])


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
        }catch(exception){
           
        }
    }

    let handleInputChange = (value: string) => {
        console.log(value)
        
        if(employeeTable)
        {
            const index = employeeTable["reimbursement"].findIndex(
                (i:any) => i.id === isEditing.re
            )

            setEmployeeTable((xValue: {[key: string]: Array<Reimbursements>}| undefined)=>{
                
                const temp: Reimbursements[] = employeeTable["reimbursement"]
                temp[index].comment = value

                return(
                    {["reimbursement"]: temp} 
                    
                )
            })
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
                        employeeTable["reimbursement"].map( (re: Reimbursements) => {

                            return(
                                <tr key={re.id} onClick={() => {startEdit(re)}} className="record">
                                    <td>{re.id}</td>
                                    {
                                        isEditing.isEditing && isEditing.re == re.id ?
                                        <Comment value={re.comment} onValueChange={handleInputChange} onEditComplete={stopEdit} id={re.id}/>
                                        :
                                        <td >{re.comment}</td>
                                    }
                                    
                                    <td>{re.status}</td>
                                    <td>{re.price}</td>
                                    <td><button onClick={() =>{deleteTable(re.id)}}>DELETE</button></td>
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