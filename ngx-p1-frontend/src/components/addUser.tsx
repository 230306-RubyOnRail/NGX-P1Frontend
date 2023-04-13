import User from "../models/users";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {addUser} from "../remote/services/user-service";

interface iUser{
    currentUser: User|undefined
}




function NewUser(props:iUser){
const [name,setName] = useState<string>()
const [email, setEmail] = useState<string>()
const [password, setPassword] = useState<string>()
const [manager, setManager] = useState<boolean>()

    let onSubmit = () =>{
    addUser(name, email, password, manager)
    }
    return (
        
        <>
        
            <TextField id="outlined-basic" value = {name} label="Name" variant="outlined" onChange={(e) =>{setName(e.target.value)}} />
            <TextField id="outlined-basic" value={email} label = "Email"  variant="outlined" onChange={(e) =>{setEmail(e.target.value)}} />
            <TextField id="outlined-basic" value = {password} label="Password" variant="outlined" onChange={(e) =>{setPassword(e.target.value)}} />
            <TextField id="outlined-basic" value = {manager} label="Manager" variant="outlined" onChange={(e) =>{setManager(Boolean(e.target.value))}} />
            <Button variant="contained" onClick={onSubmit}>Add user</Button>



        </>




    )

}

export default NewUser;