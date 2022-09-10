import React, {useState, useEffect} from 'react'
import HookMouse from './HookMouse'

//class componentWillUnmount using hooks cleanup codes
function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() =>setDisplay(!display)}>Toggle Display</button>
        {display && <HookMouse />}
        
    </div>
  )
}

export default MouseContainer