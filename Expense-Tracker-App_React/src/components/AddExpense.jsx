import React from 'react'
import { useContext } from 'react';
import { ExpenseListContext } from '../context/ExpenseListContext';

function AddExpense() 
{
  const { expenseList , setExpenseList } = useContext(ExpenseListContext);

  return (
    <div>
      <div className='title-container'>
        <h2> Add Expense </h2>
      </div>
      <div className="add-expense-container">
        <div className='add-name-container'>
          <p className='add-expense-name'> Name </p>
          <div className='search-bar-container'>
            <input id='expense-name-input' className='search-bar' type="text" placeholder='' />
          </div>
        </div>
        <div className='add-cost-container'>
          <p className='add-cost'> Cost </p>
          <div className='search-bar-container'>
            <input id='expense-cost-input' className='search-bar' type="text" placeholder='' />
          </div>
        </div>
        <div className='new-expense-save-button-container'>
          <button onClick={ () => { setExpenseList( [ ...expenseList , { id: expenseList.length + 1 , name: document.getElementById("expense-name-input").value , cost: Number(document.getElementById("expense-cost-input").value) } ] ) } }> Add </button>
        </div>
      </div>
    </div>
  )
}

export default AddExpense;