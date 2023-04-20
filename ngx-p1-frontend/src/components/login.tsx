import { SyntheticEvent, useState } from "react";
import User from "../models/users";
import { Navigate } from "react-router-dom";
import { authenticate } from "../remote/services/session-service";

interface ILoginProps{
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User) => void
}

export default function Login(props: ILoginProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    let updateEmail = (e: SyntheticEvent) => {
        setEmail((e.target as HTMLInputElement).value); 
        
    }

    let login = async (e: SyntheticEvent) => {
     
        if(email && password){
            setErrorMessage('');
           

            try{
            
                let response = await authenticate({email, password});

                if(response.status <= 201){
                    let data: User = await response.data;
                    
                    props.setCurrentUser(data);
                    sessionStorage.setItem('token', data.token);
                    e.preventDefault();
                    
                   
                    
                } else {
                    setErrorMessage('Credentials invalid.');
                }
            } catch (err){
               setErrorMessage('Unable to connect to the API');
            }
        } else {
           setErrorMessage('Invalid input for email/password.');
        }
    }

    return (
        props.currentUser ? 
        <>
            {props.currentUser.manager ?
            <>
                <Navigate to="/reimbursement"/>
            </>
            :
            <>
                <Navigate to="/user/id/reimbursement"/>
            </>
            
            }
        </>
        : 
        <>
            <p> WORKFLOW WORKS </p>
            <p>Login</p>
            <div>
                <input type="text" id="login-email" placeholder="Enter your email" onChange={updateEmail}/>
                <br /><br />
                <input type="text" id="login-password" placeholder="Enter your password" onChange={(e) => {
                    setPassword(e.target.value);
                    }}/>
                <br /><br />
                <button id="login-button" onClick={login}>Login</button>                
            </div>
            <div>
                {errorMessage}
            </div>
        </>
    );
}
