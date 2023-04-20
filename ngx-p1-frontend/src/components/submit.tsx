import User from "../models/users";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {postSubmit} from "../remote/services/reimbursement-service";

interface iUser{
    currentUser: User|undefined
}




function Submit(props:iUser){
const [comment,setComment] = useState<string>()
const [price, setPrice] = useState<string>()
    let onSubmit = async () =>{
        let response = await postSubmit(comment,price,props.currentUser?.id)
        if(response.status <= 201){
            // give green check mark
        }
    }
    return (
        <>

            <TextField id="outlined-basic"  label="Comment" variant="outlined" onChange={(e) =>{setComment(e.target.value)}} />
            <TextField id="outlined-basic" label="Price"  variant="outlined" onChange={(e) =>{setPrice(String(e.target.value))}} />

            <Button variant="contained" onClick={onSubmit}>Submit</Button>



        </>




    )

}

export default Submit;
