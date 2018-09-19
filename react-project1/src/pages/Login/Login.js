import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
    render(){

        return(
            <div>
                <h2>로그인 해주세요</h2>
                <div>
                    Email<input type ="email"></input>
                    Password<input type ="password"></input>
                </div>
                <div><button type="button">로그인</button></div>
            </div>
        )
    }
}
export default Login;