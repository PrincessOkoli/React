import React from 'react'
import useInput from '../hooks/useInput'

//example three of custom Hooks
function UserForm() {
    
    const [firstName, bindFirstName , resetFirstName] = useInput('')
    const [lastName, bindLastName , resetLastName] = useInput('')
    
    const submitHandler = (e) =>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetLastName()
        resetFirstName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>first Name</label>
                <input {...bindFirstName} type="text" />
            </div>
            <div>
                <label>last Name</label>
                <input {...bindLastName} type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}

export default UserForm