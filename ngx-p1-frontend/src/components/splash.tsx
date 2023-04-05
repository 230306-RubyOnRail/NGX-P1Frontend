import React from "react";
import '../styles/splash.css'

export default class Splash extends React.Component{
    render(): React.ReactNode {
        return(
            <div className="splash-body">
                <div className="wrapper">
                    <div className="form-title">
                        <h2 className="login">Login</h2>
                    </div>
                    <form action="" className="form-wrapper">
                        <input placeholder="Email" type="email" className="email"  />
                        <input placeholder="Password" type="password" className="password" />
                    </form>
                </div>
            </div>
        )
    }
}