import React, { useState } from 'react'
import "./matrixStyle.css"
function Matrix() {
    const initial_color=Array(9).fill("white")
    const [color,setColor]=useState(initial_color)
    const [orderClick,setOrderClick]=useState([])

    const handleBoxClick=(ind)=>{
        let newColor=[...color]
        if(color[ind]==="white"){
            newColor[ind]='green'
            setColor(newColor)
            setOrderClick([...orderClick,ind])
        }
        // chiking if the last box 
        if(ind===8){
            setTimeout(()=>{
              changingColorOrange([...newColor],[...orderClick,ind])
            },200)  // delay to ensure the last green
        }
    }

    const changingColorOrange=(newColor,order)=>{
        order.forEach((clickIndex, i)=>{
            setTimeout(()=>{
            const updatedColor=[...newColor]
            updatedColor[clickIndex]="orange"
            setColor(updatedColor)
            newColor=[...updatedColor]
            //console.log("hdsakh")
            },i*500)
          
        })
    }
  return (
    <div className='matrix'>
        {
            color.map((col,ind)=>(
                <div 
                className="box"
                key={ind}
                style={{backgroundColor:col}}
                onClick={()=>handleBoxClick(ind)}
                >
    
                </div>
            ))
        }
    </div>
  )
}

export default Matrix