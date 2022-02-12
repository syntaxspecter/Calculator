import React from 'react';

function rowMake(i , props){
    return (
    <div className="btn-row">
    <button className="btn btn-primary btn-lg m-2" value = {i} onClick={props.handleIncrement}>{i}</button>
    <button className="btn btn-primary btn-lg m-2" value={i+1} onClick={props.handleIncrement}>{i+1}</button>
    <button className="btn btn-primary btn-lg m-2" value={i+2} onClick={props.handleIncrement}>{i+2}</button>
   </div>)
}

function CalcArea(props) {
    return ( 
    
        <div className="btn-area">
            {rowMake(1 , props)}
            {rowMake(4 , props)}
            {rowMake(7 , props)}
           
           <div className="btn-row">
            <button className="btn btn-secondary btn-lg m-2"onClick={props.handleReset}>C</button>
            <button className="btn btn-primary btn-lg m-2" value="0" onClick={props.handleIncrement}>0</button>
            <button className="btn btn-secondary btn-lg m-2" style={props.myStyler} onClick={props.handleCalc}>=</button>
           </div>


        </div>
 
        
     );

     
   
 
 
}


export default CalcArea;