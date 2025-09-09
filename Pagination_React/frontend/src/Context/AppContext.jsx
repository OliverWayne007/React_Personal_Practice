import { createContext } from "react";

const AppContext = createContext( {
    pageIndices: 0 , 
    currentPageIndex: 0 , 
    setCurrentPageIndex: () => {}
} );

export default AppContext;