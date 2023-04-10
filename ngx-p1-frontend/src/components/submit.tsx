import User from "../models/users";
import {Button, TextField} from "@mui/material";
import {useState} from "react";

interface iUser{
    currentUser: User|undefined
}




function Submit(props:iUser){
const [comment,setComment] = useState()

    return (
        <>
            <TextField id="outlined-basic" value = "" label="Comment" variant="outlined" onChange={(value) =>{setComment(value)}} />
            <TextField id="outlined-basic" label="Price" variant="outlined" />
            <Button variant="contained">Submit</Button>



        </>




    )

}

export default Submit;