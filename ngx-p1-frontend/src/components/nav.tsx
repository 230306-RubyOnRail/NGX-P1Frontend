import '../styles/nav.css'

export default function nav(){
    return(
        <div className="header-container">
            <h2 className="logo">
                ERS
            </h2>
            <nav className="navbar">
                <a href="/home" className="home">Home</a>
                <a href="/about" className="about">About</a>
                <button className="button-login">Login</button>
            </nav>
    
        </div>

    );
}