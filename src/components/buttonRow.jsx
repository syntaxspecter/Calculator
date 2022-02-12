import React from 'react';
import Cbuttons from './buttons';

function Rowsbutton(props) {
    return ( 
        <div>  
            <Cbuttons value = {props.value}></Cbuttons>
            <Cbuttons value = {parseInt(props.value) + 1}></Cbuttons>
            <Cbuttons value = {parseInt(props.value) + 2}></Cbuttons>
        </div>
            
     );
}

export default Rowsbutton;