import React from 'react';
import './css/calcopr.css';


function CalcOpr(props) {

  

    return (  
        <div className='opr'>
            <div className="btn-row">
            <button className="btn btn-secondary btn-lg m-2" onClick={props.handleSum} style={props.myStyler}>+</button>
            <button className="btn btn-secondary btn-lg m-2" onClick={props.handleSub} style={props.myStyler} >-</button>
            <button className="btn btn-secondary btn-lg m-2" onClick={props.handleMul} style={props.myStyler}>*</button>
            <button className="btn btn-secondary btn-lg m-2" onClick={props.handleDiv} style={props.myStyler}>/</button>
           </div>
        </div>
    );
}

export default CalcOpr;