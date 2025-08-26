import { useEffect, useState } from "react";

export default function UseCounter(){
    const [count,setCount]=useState(()=>{
        const latestValue = localStorage.getItem('value')
        return latestValue? Number(latestValue):0
    })

    const increment= () => {
        setCount((pre)=> pre+2)
    }

    const decrement= () => {
        setCount((pre) => pre-2)
    }

    const reset= () => {
        setCount(0)
    }

    useEffect(()=>{
        localStorage.setItem("value",count)
    },[count])

    return{
        count,increment,decrement,reset
    }
}