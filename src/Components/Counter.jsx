import React, { useEffect, useState } from 'react'
import Child from './Child';

function Counter() {
    const [count,setCount] = useState(0);
    const [color,setColor] =useState("red")
    const colors =["red","green","Yellow","orange","purple","blue","brown"]

   const [child,setChild] = useState(true)

   const toShow =()=>{
       setChild(!child)
   }

    const increment= ()=>{
        const newvalue = count+1
        setCount(newvalue)
    }
    const decriment =()=>{
        const newvalue =count-1
        setCount(newvalue)
    }

    // useEffect(()=>{
    //     // setCount(10)
    // },[])

    useEffect(()=>{
        const changecolor =colors[ Math.floor(Math.random()*colors.length)]
        setColor(changecolor)
        console.log(changecolor);
    },[count])


  return (
    <div className='flex justify-center items-center'>
        <div style={{backgroundColor:color}} className='w-64 h-64 bg-slate-300 border-black flex flex-col gap-10 items-center justify-center '>

            <div className='space-x-8'>
                <button  className='w-20 border-black bg-white'onClick={increment}>+</button>


                {count}
                <button className='w-20 border-black bg-white'onClick={decriment}>-</button>
                <button className='w-20 border-black bg-white'onClick={toShow}>{child ? "Hide" : "Show"}</button>
                {child ?<Child/> :null}
            </div>
       
       </div>
    </div>
  )
}

export default Counter
