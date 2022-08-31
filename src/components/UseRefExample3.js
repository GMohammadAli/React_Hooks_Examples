import React, { useState } from 'react'
import ToDo from './ToDo';

function UseRefExample3() {
    const [showToDo , setShowToDo] = useState(true);

  return (
    <div className="container mt-5">
      {/* Memory Leak Error Fix */}
      {/* This error only occurred in the React verison 17.0.2 , its resolved in react 18 */}
      {showToDo && <ToDo />}
      <button className="btn btn-primary" onClick={() => {
        setShowToDo(!showToDo);
      }}>Toggle ToDo</button>
    </div>
  );
}

export default UseRefExample3