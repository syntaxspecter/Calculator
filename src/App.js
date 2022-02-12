import React,{useState} from "react";
import './App.css';
import CalcArea from "./components/calcarea";
import CalcOpr from "./components/calcopr";
import Result from "./components/result";



function App() {


  let [val,fetchVal] = useState(""); // for updating value in result area using buttons as well as manual input
  let [ph,fetchPh] = useState(0); //for updating value of placeholder in result area
  let [myStyle,fetchStyle] = useState({color:"white"}); //for updating value of sum button in result area
  let [result,fetchRes] = useState(0);

  let a = 0 ;
 


  return (
    <div className="App">
      
      <div className="OutputArea">
        
        <Result value = {val} 
          ph = {ph}
          handleChange={
            (e)=>{fetchVal(val=e.target.value);
            console.log(val);
          }}>  
        </Result>
      </div>
      
      
      <div className="MainArea">

        <CalcArea  
        
          handleIncrement={
            (e)=>{fetchVal(val=val+e.target.value);
              
             fetchStyle(myStyle = {color:"white"})
            }}
          
          handleCalc={
            (e)=>{
              fetchRes(result = result+parseInt(val));
              fetchVal(val=result);
             fetchStyle(myStyle = {pointerEvents:"none", cursor: "default"})
            }
          }

          handleReset={
            (e)=>{fetchVal(val="");
            fetchRes(result=0);
            fetchPh(ph=0) ;
          }}>
        </CalcArea>


        <CalcOpr
         myStyler = {myStyle}        
         handleSum={(e)=>{
           fetchStyle(myStyle = {pointerEvents:"none", cursor: "default"})
           fetchRes(result = result+parseInt(val));
           fetchPh(ph=result+"+") ;
           fetchVal(val="") ;}}

           handleSub={(e)=>{
            fetchStyle(myStyle = {pointerEvents:"none", cursor: "default"})
            fetchRes(result = result-parseInt(val));
            fetchPh(ph=result+"-") ;
            fetchVal(val="") ;}}
            
            handleMul={(e)=>{
              fetchStyle(myStyle = {pointerEvents:"none", cursor: "default"})
              fetchRes(result = result*parseInt(val));
              fetchPh(ph=result+"*") ;
              fetchVal(val="") ;}}

              handleDiv={(e)=>{
                fetchStyle(myStyle = {pointerEvents:"none", cursor: "default"})
                fetchRes(result = result/parseInt(val));
                fetchPh(ph=result+"/") ;
                fetchVal(val="") ;}}
        ></CalcOpr>
      </div>
      
    </div>
  );
}

export default App;
