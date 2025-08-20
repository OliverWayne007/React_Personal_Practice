import React from 'react'
import { useState } from 'react';
import ExpenseItem from './ExpenseItem'
import { ExpenseListContext } from '../context/ExpenseListContext.jsx';
import { useContext } from 'react';

function ExpenseList() 
{
  const { filteredExpenseList } = useContext(ExpenseListContext);
  return (
    <div className='expense-list'>
        { filteredExpenseList.map( (expense) => { return ( <ExpenseItem key={expense.id} name={expense.name} cost={expense.cost} /> ) } ) }
    </div>
  )
}

export default ExpenseList;