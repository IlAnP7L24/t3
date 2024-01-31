import React from 'react'
import './t3.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const t3 = () => {
  return (
    <div className='container'>
        <h1 className="title">Tic-Tac-Toe Game In <span>React</span></h1>
        <div className="board">

        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default t3