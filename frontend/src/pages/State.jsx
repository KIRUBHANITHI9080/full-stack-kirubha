import React,{useState} from 'react'
const State = () => {
// variable [variablename, setter Function] = usestate(increment)
    const[count,setcount] = useState(0);
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
    </div>
  )
}

export default State