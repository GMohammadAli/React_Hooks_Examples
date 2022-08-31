import React, { useEffect, useRef, useState } from 'react'

function ToDo() {
    const [isLoading, setisLoading] = useState(true)
    const [toDo, settoDo] = useState({})
    const isMounted = useRef(true)
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => {
           setTimeout(() => {
            if(isMounted){
                settoDo(data);
                setisLoading(false);
            }
           }, 3000) //3s
        })

        //Runs when component is unmounted
        return () => {
            console.log(123)
        }
    }, [isMounted])
  return isLoading? <h3>Loading...</h3> : <h3>{toDo.title}</h3>
}


export default ToDo
