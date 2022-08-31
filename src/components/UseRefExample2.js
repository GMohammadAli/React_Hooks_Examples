import React, { useEffect, useRef, useState } from 'react'

function UseRefExample2() {
    const [ name, setName] = useState('')
    const renders = useRef(1)
    const prevName = useRef('')

    useEffect(() => {
        renders.current = renders.current + 1 
        prevName.current = name
    }, [name])

  return (
    <div className='container m-3'>
      <h1>Renders: {renders.current}</h1>
      <h2>PrevState : {prevName.current}</h2>
      <input type="text" value={name} placeholder="input" onChange={(e) => {
        setName(e.target.value)
      }}/>
    </div>
  )
}

export default UseRefExample2
