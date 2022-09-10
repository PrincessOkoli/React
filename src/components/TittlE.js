import React from 'react'

///usecallback hook1
function TittlE() {
    console.log("Rendering title")
  return (
    <div>
        <h2>useCallback Hook</h2>
    </div>
  )
}

export default React.memo(TittlE);