import React from "react";

export default class Registration extends React.Component{
    state = {
        username: "",
        password: "",
        repeatPassword: "",
        phoneNumber:"",
        email: "",
        address: ""
    }
    render() {
        return (
            <div className="register">
                <div className="page-container">
                    <div className="register-heading">Реєстрація</div>
                    <div className="user-data-input">
                        <input onChange={(text)=>{this.setState({username: text.target.value})}} placeholder={"Ім'я*"} value={this.state.username}/>
                        <input onChange={(text)=>{this.setState({password: text.target.value})}} placeholder={"Пароль*"} value={this.state.password}/>
                        <input onChange={(text)=>{this.setState({repeatPassword: text.target.value})}} placeholder={"Повторіть пароль*"} value={this.state.repeatPassword}/>
                        <input onChange={(text)=>{this.setState({email: text.target.value})}} placeholder={"Email*"} value={this.state.email}/>
                        <input onChange={(text)=>{this.setState({phoneNumber: text.target.value})}} placeholder={"Номер телефону"} value={this.state.phoneNumber}/>
                        <input onChange={(text)=>{this.setState({address: text.target.value})}} placeholder={"Адреса"} value={this.state.address}/>
                    </div>
                    <div className="submit-button">
                        <button onClick={()=>{window.location.assign("/Profile")}}>Створити акаунт</button>
                    </div>
                </div>
            </div>
        );
    }
}