import React from 'react'
import { ExpenseListContext } from '../context/ExpenseListContext';
import { useContext } from 'react';

function SearchBar() 
{
  const { expenseList , setFilteredExpenseList } = useContext(ExpenseListContext);

  return (
    <div className='search-bar-container'>
        <input 
        id='search-bar' 
        className='search-bar' 
        type="text" 
        placeholder='Type to search...' 
        onChange={ (e) => {
          setFilteredExpenseList(expenseList.filter( (expense) => { return expense.name.toLowerCase().includes(e.target.value.toLowerCase()) } )) 
        } } />
    </div>
  )
}

export default SearchBar;