import React from 'react';
import BudgetSummary from './components/BudgetSummary.jsx';
import Expenses from './components/Expenses.jsx';
import AddExpense from './components/AddExpense.jsx';

import { AppContext } from './context/AppContext.js';
import { ExpenseListContext } from './context/ExpenseListContext';

import { useEffect } from 'react';
import { useState } from 'react';

function App() 
{
  const [budget , setBudget] = useState(0);
  const [spent , setSpent] = useState(0);
  const [remaining , setRemaining] = useState(0);

  const [expenseList , setExpenseList] = useState( [] );

  const [filteredExpenseList , setFilteredExpenseList] = useState( [ ...expenseList ] );

  // { id: 1 , name: "Shopping" , cost: 50 } ,
  // { id: 2 , name: "Holiday" , cost: 300 } ,
  // { id: 3 , name: "Transportation" , cost: 70 } ,
  // { id: 4 , name: "Fuel" , cost: 40 } ,
  // { id: 5 , name: "Medicines" , cost: 100 }

  useEffect( () => { setRemaining(budget - spent) } , [budget , spent] );

  useEffect( () => {
    let totalExpenses = 0;
    expenseList.forEach( (expense) => { totalExpenses += Number(expense.cost) } );
    setSpent(totalExpenses);
    setFilteredExpenseList([...expenseList]);
  } , [expenseList] );

  return (
    <div className='budget-app'>
      <AppContext.Provider value={ {
        budget: budget , 
        spent: spent , 
        remaining: remaining , 
        setBudget: setBudget , 
        setSpent: setSpent , 
        setRemaining: setRemaining
      } }
      >
        <BudgetSummary />
        <ExpenseListContext.Provider value={ { expenseList: expenseList , setExpenseList: setExpenseList , filteredExpenseList: filteredExpenseList , setFilteredExpenseList: setFilteredExpenseList } }>
          <Expenses />
          <AddExpense />
        </ExpenseListContext.Provider>
      </AppContext.Provider>    
    </div>
  )
}

export default App
