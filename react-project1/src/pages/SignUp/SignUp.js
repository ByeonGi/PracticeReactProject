import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component{
    render(){

        return(
            <div>
                <h2>환영합니다 !</h2>
                <div className="container">
                    <div>
                        Email address<input></input>
                    </div>
                    <div>
                        NicName<input></input>
                    </div>
                    <div>
                         Password<input></input>
                    </div>
                    
                </div>
                <div>
                    <button>가입</button>
                </div>
            </div>
        )
    }
}
export default SignUp