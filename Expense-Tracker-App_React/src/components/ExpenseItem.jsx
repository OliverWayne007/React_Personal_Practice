import React from 'react'
import { useContext } from 'react';
import { ExpenseListContext } from '../context/ExpenseListContext';

function ExpenseItem( { name , cost } ) 
{
  const { expenseList , setExpenseList } = useContext(ExpenseListContext);

  return (
    <div className='expense'>
        <div className='expense-name-container'>
            <p className='expense-name'> {name} </p>
        </div>
        <div className='expense-cost-container'>
            <span className='expense-cost'> ${cost} </span>
            <button onClick={ () => { setExpenseList( expenseList.filter( expenseItem => !(expenseItem.name === name) ) ) } }> Remove </button>
        </div>
    </div>
  )
}

export default ExpenseItem;