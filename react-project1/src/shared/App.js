import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Home, Login, SignUp} from 'pages';
import Navbar from '../components/Navbar';

class App extends Component {
    render(){
        return(
            <div >
                <Navbar/>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/signup" component = {SignUp}/>
            </div>
        )
    }

}

export default App;