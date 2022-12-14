import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    // useEffect(() => {
    //     const Interval = setInterval(() =>{
    //         setTimer((prevTimer) => prevTimer + 1)
    //     }, 1000)
    //     return () =>{
    //         clearInterval(Interval)
    //     }
    // }, [])

    //using useRef to interact withyhe DOM element
    useEffect(() => {
        intervalRef.current = setInterval(() =>{
            setTimer((prevTimer) => prevTimer + 1)
        }, 1000)
        return () =>{
            clearInterval(intervalRef.current)
        }
    }, [])

  return (
    <div>
       Hook timer - {timer}
       <button onClick={() =>clearInterval(intervalRef.current)}>clear timer</button>
    </div>
  )
}

export default HookTimer