import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import User from "../models/users";
import '../styles/nav.css';

interface INavProps {
    currentUser: User | undefined,
    setCurrentUser: (nextUser: User | undefined) => void
}

export default function Nav(props: INavProps) {

    function logout() {
        props.setCurrentUser(undefined);
        sessionStorage.clear();
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Welcome {props.currentUser?.name}
                    </Typography>
                    {/* <Button color="inherit"><Link className="link" to="/home">Home</Link></Button> */}
                    {
                        //CHECK THIS!!!
                        props.currentUser ? 
                        <>

                                

                                {props.currentUser.manager ?
                                <>
                                    <Button color="inherit"><Link className="link" to="/reimbursement">Reimbursements</Link></Button>
                                    <Button color="inherit"><Link className="link" to="/user/add">Add user</Link></Button>
                                </>
                                :
                                <>
                                    <Button color="inherit"><Link className="link" to="/submit">Submit</Link></Button>
                                    <Button color="inherit"><Link className="link" to="/user/id/reimbursement">Reimbursements</Link></Button>
                                    
                                </>
                                }

                                <Button color="inherit" onClick={logout}><Link className="link" to="/">Logout</Link></Button>
                            </>
                            :
                            <Button color="inherit"><Link className="link" to="/">Login</Link></Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}