import { useState } from "react";
import User from "../models/users";
import {getReimbursements} from "../remote/services/reimbursement-service"

interface iUser{
    currentUser: User
}
export default function ReimbursementEmployee(props: iUser){
    const [employeeTable, setEmployeeTable] = useState();

    let updateEmployee = async() => {
        console.log("inside updateEmployee function")

        try{
            let response = await getReimbursements(props.currentUser.id)
            if (response.status === 200) {
                setEmployeeTable(response.data);
                // console.log(response.data);
            } else {
                console.log('Unable to retrieve to dos.');
            }
        }catch(err){
           
        }
    }
    return(
        employeeTable ?
        <>
            
        </>
        :
        <>
        </>
    )

}