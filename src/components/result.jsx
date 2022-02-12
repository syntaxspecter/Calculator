import React from 'react';
import './css/result.css';

function Result(props) {
    return (  
            <input placeholder={props.ph} onChange={props.handleChange} className="form-control" type = "number" value={props.value}></input>
        
    );
}

export default Result;