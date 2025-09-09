import { useContext } from "react"
import AppContext from "../Context/AppContext"

const PageIndex = ( { index } ) => {
    // console.log("index: " , index , " lastIndex: " , lastIndex);

    const {pageIndices , setCurrentPageIndex , currentPageIndex} = useContext(AppContext);

    if(index == 0)
    {
        return (
            <div className="pageIndex" onClick={ () => { setCurrentPageIndex(currentPageIndex - 1) } }> Back </div>
        )
    }
    if(index == pageIndices + 1)
    {
        return (
            <div className="pageIndex" onClick={ () => { setCurrentPageIndex(currentPageIndex + 1) } }> Next </div>
        )
    }
    return (
        <div className="pageIndex" onClick={ () => { setCurrentPageIndex(index) } }> { index } </div>
    )
}

export default PageIndex;