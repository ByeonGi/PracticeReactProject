import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component{
    render(){

        return(

            <div className ="navbar">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>마이페이지</a></li>
                    <li><a>가입</a></li>
                    <li><a>로그인</a></li>
                </ul>
            </div>
        )
    }
}
export default Navbar;