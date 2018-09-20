import React from 'react';
import Explanation from './Explanation';
import Opinion from './Opinion';
import List from './List';
import './index.css';


const Home = () =>{
    return (
        <div className="container">
            <div className="home-container">
                <Explanation/>
                <Opinion/>
                <List/>
             </div>
        </div>
        
    )
}

export default Home;