import React from 'react'

///usecallback hook1
function Cnt({text, count}) {
    console.log(`Rendering ${text}`)
  return (
    <div>
        {text} - {count}
    </div>
  )
}

export default React.memo(Cnt);