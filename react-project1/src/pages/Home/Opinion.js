import React, {Component} from 'react';
import './Opinion.css';

class Opinion extends Component{
    render(){
        return(
            <div className="container">
                <div className="opinion">
                    <label className="label">오늘의 의견</label>
                    <textarea className ="opinion-content" rows="5" placeholder="오늘의 의견을 적어보아요"></textarea>
                </div>

                <br/>
                <div className="button">
                    <button type ="button" className = "button button-write">쓰기</button>
                </div>
            </div>
        )
    }
}

export default Opinion;