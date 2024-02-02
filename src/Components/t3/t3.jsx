import React, { useEffect, useState } from "react";
import './t3.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = new Array(9).fill('');
console.log("Data: ", data);


const T3 = () => {
  let [count,setCount]=useState(0);
  let [lock,setLock]=useState(false);

  const toggle=(e,num)=>{
    if (lock){
      console.log("LOCKED");
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML=`<img src='${cross_icon}'>`;
      data[num]="x";
      setCount(++count);
    }
    else{
      e.target.innerHTML=`<img src='${circle_icon}'>`;
      data[num]="o";
      setCount(++count);
    }
    checkWin();
    console.log("Data: ", data);
  }

const checkWin=()=>{
  if(data[0]===data[1]&&data[1]===data[2]&&data[2]!=='')
  {
    victory(data);
    console.log("Victory 1");
  }
  else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!=='')
  {
    victory(data);
        console.log("Victory 2");
  }
  else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!=='')
  {
    victory(data);
        console.log("Victory 3");
  }
  else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!=='')
  {
    victory(data);
        console.log("Victory 4");
  }
  else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!=='')
  {
    victory(data);
        console.log("Victory 5");
  }
  else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!=='')
  {
    victory(data);
        console.log("Victory 6");
  }
  else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!=='')
  {
    victory(data);
        console.log("Victory 7");
  }
  else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!=='')
  {
    victory(data);
        console.log("Victory 8");
  }
}

const victory=()=>{setLock(true);}
//console.log(setLock);

  return (
    <div className='container'>
        <h1 className="title">Tic-Tac-Toe Game In <span>React</span></h1>
        <div className="board">

          <div className="row1">
            <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
          </div>
          <div className="row2">
            <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
          </div>
          <div className="row3">
            <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
          </div>

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}



export default T3