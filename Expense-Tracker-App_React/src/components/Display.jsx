import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function Display( { title } ) 
{
  const { budget , spent , setBudget , setSpent } = useContext(AppContext);

  if(title === "Budget")
  {
    return (
        <div className='display budget'>
          <div className="budget-display">
            <span> Budget: $</span>
            <input id='budget-input' type="text" />
          </div>
          <button onClick={ () => { setBudget(Number(document.getElementById("budget-input").value)) } }> Edit </button>
        </div>
    )
  }
  else if(title === "Remaining")
  {
    return (
        <div className='display remaining'>
            <span> Remaining: $ {budget - spent} </span>
            {/* <button> Edit </button> */}
        </div>
    )
  }
  else
  {
    return (
        <div className='display spent'>
          {/* <div className="spent-display">
            <span> Spent: $</span>
            <input id='spent-input' type="number" />
          </div> */}
          <span> Spent: $ {spent} </span>
          {/* <button onClick={ () => { setSpent(Number(document.getElementById("spent-input").value)) } }> Edit </button> */}
        </div>
    )
  }
}

export default Display;