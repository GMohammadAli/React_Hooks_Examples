import React, { useRef } from 'react'

function UseRefExample1() {
    const inputRef = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        document.getElementById('h1').innerText = inputRef.current.value;    
        inputRef.current.focus();   
        inputRef.current.value=""
    }
  return (
    <div className="container mt-5">
        {/* To Create DOM Reference */}
      <h1 id="h1">Demo use of useRef Hook for creating DOM reference</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
        <input type="text" id="name" ref={inputRef} placeholder="Name" className='form-control mb-2'/>
        <button type="submit" className='btn btn-primary'>Submit</button>
      </form>
    </div>
  );
}

export default UseRefExample1
