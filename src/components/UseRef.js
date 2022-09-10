import React, {useEffect, useRef} from 'react'

//UseRef Hooks: it makes it possible to assess DOM NODES directly within functional components

function UseRef() {

    const inputRef = useRef(null)
    useEffect(() => {
        // focus the input element 
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <input ref= {inputRef} type="text" />
    </div>
  )
}

export default UseRef