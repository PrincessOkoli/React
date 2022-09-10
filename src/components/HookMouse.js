import React, {useState, useEffect}from 'react'

//how to make use of the useEffect only once
function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition  = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    //[] as argument because we're telling react that this useEffect not depend on any state or props
    // so theres no reason for the Effect to be called on rerenders, i.e it should be callled only on initial render(i.e only once)
    
    useEffect(() =>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        //the clean up codes
        return () =>{
            console.log('cleanup called')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

  return (
    <div>
        Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse