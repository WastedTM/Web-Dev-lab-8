import React from "react";
import {Link} from "react-router-dom";

export default class Authorization extends React.Component{
    state={
        email: "",
        password: "",
    }
    render() {
        return (
            <div className="sign-in">
                <div className="heading">Вхід</div>
                <div className="registration-link">
                    Або <Link to={"/Registration"}>Реєстрація</Link>
                </div>
                <div className="data-entering">
                    <input placeholder="Email*" value={this.state.email} onChange={(text)=>this.setState({email: text.target.value})}></input>
                    <input placeholder="Пароль*" type="password" value={this.state.password} onChange={(text)=>this.setState({password:text.target.value})}></input>
                </div>
                <div className="submit-button">
                    <button onClick={()=>{
                            window.location.assign("/Profile")
                    }}>Увійти</button>
                    <Link to={"/Forgot-Password"}></Link>
                </div>
            </div>
        );
    }
}