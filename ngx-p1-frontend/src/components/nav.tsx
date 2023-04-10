import '../styles/nav.css'
import { Link } from 'react-router-dom';

export default function nav(){
    return(
        <div className="header-container">
            <h2 className="logo">
                ERS
            </h2>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/reimbursement">Reimbursement</Link>
                <Link to="/submit">Submit</Link>
                <button className="button-login">Login</button>
            </nav>
    
        </div>
    
    );
    
}