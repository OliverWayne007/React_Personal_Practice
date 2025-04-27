import { createContext } from "react";

const Context = createContext( { 
    countContext : 0 , 
    setCountContext : () => {}
 } );

export { Context } ;