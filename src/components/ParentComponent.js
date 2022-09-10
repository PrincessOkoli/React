import React, {useState, useCallback} from 'react'
import Cnt from './Cnt'
import TittlE from './TittlE'
import Button from './Button'

//useCallback hook
function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    const IncrementAge = useCallback(() =>{
        setAge(age + 1);
    }, [age])
    const IncrementSalary = useCallback(() =>{
        setSalary(salary + 1000);
    }, [salary])

  return (
    <div>
        <TittlE />
        <Cnt text = "Age" count = {age}/>
        <Button handleClick={IncrementAge} >Increment Age</Button>
        <Cnt text = "salary" count = {salary}/>
        <Button handleClick={IncrementSalary} >Increment Salary</Button>
    </div>
  )
}

export default ParentComponent