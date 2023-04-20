import User from "../models/users";
import { Button, TextField, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { SyntheticEvent, useState} from "react";
import { addUser } from "../remote/services/user-service";
import { Navigate } from "react-router-dom";

interface iUser {
    currentUser: User | undefined
}




function NewUser(props: iUser) {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [password, setPassword] = useState<string>()
    const [manager, setManager] = useState<boolean>(false)
    const [message, setMessage] = useState<string>()
    

    let onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        if(props.currentUser?.manager){
            setMessage('')
        try {
            let response = await addUser(name, email, password, manager)
            if (response.status <= 201) {
                setMessage('User succuessfully created')
            } 
        }catch(error) {
            setMessage('Failed to add user')
        }
        }else{
            setMessage('You are not authorized to add a user')
        }

    }

   let handleChange = (e: any) => {
    if(e.target.checked){
        setManager(true)
        console.log("is checked")
    }else{
        setManager(false)
    }
   }

    return (
        props.currentUser ?
            <>
                {props.currentUser.manager ?
                    <>
                        <TextField id="outlined-basic" value={name} label="Name" variant="outlined" onChange={(e) => { setName(e.target.value) }} />
                        <TextField id="outlined-basic" value={email} label="Email" variant="outlined" onChange={(e) => { setEmail(e.target.value) }} />
                        <TextField id="outlined-basic" value={password} label="Password" variant="outlined" onChange={(e) => { setPassword(e.target.value) }} />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Manager" onChange={handleChange} />
                        </FormGroup>
                        <Button variant="contained" onClick={onSubmit}>Add user</Button>
                        <div>
                        {message}
                        </div>
                    </>
                    :
                    <>
                        <div>
                        {message}
                        </div>
                    </>

                }
            </>
            :
            <>
                <Navigate to="/" />
            </>



    )

}

export default NewUser;