import { createContext } from "react";

const AppContext = createContext( { 
    budget: 0 , 
    spent: 0 , 
    remaining: 0 , 
    setBudget: () => {} , 
    setSpent: () => {} , 
    setRemaining: () => {}
});

export { AppContext };