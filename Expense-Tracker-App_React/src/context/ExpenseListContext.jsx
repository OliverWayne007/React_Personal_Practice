import { createContext } from "react";

const ExpenseListContext = createContext( { expenseList: [] , setExpenseList: () => {} , filteredExpenseList: [] , setFilteredExpenseList: () => {} } );

export { ExpenseListContext };