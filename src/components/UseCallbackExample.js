import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react';

function UseCallbackExample() {
    const [ tasks, setTasks ] = useState([]);

    const addTask = useCallback(() => {
        setTasks((prevState) =>  [...prevState,"Some Task"])
    },[setTasks])


  return (
    <div className='container mt-5'>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}


const Button = React.memo(({addTask}) => {
    //If we hadn't used useCallback in the 
    //addTask function then this component would have kept
    // on re-rendering whenever tasks were added
    console.log("Button Rendered")
    return <button className='btn btn-primary' onClick={addTask}>Add Task</button>
})


export default UseCallbackExample
