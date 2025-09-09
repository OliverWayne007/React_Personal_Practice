import PageIndex from "./PageIndex";

import AppContext from "../Context/AppContext";
import { useContext } from "react";

const PaginationBar = () => 
{
    const {pageIndices , currentPageIndex} = useContext(AppContext);

    const page_index_array = [];

    if(currentPageIndex == 1)
    {
        for(let index = currentPageIndex ; index <= Math.min(pageIndices , currentPageIndex + 3) ; index++)
        {
            page_index_array.push(index);
        }

        if(Math.min(currentPageIndex + 3 , pageIndices) > currentPageIndex)
        {
            page_index_array.push(pageIndices + 1);
        }
    }
    else if(currentPageIndex == pageIndices)
    {
        if(Math.max(1 , currentPageIndex - 3) >= 1)
        {
            page_index_array.push(0);
        }
        
        for(let index = Math.max(1 , currentPageIndex - 3) ; index <= currentPageIndex ; index++)
        {
            page_index_array.push(index);
        }
    }
    else
    {
        if(Math.max(1 , currentPageIndex - 3) >= 1)
        {
            page_index_array.push(0);
        }

        for(let index = Math.max(1 , currentPageIndex - 3) ; index <= Math.min(pageIndices , currentPageIndex + 3) ; index++)
        {
            page_index_array.push(index);
        }

        if(Math.min(currentPageIndex + 3 , pageIndices) > currentPageIndex)
        {
            page_index_array.push(pageIndices + 1);
        }
    }

    return (
        <div className="pageIndicesContainer">
            { page_index_array.map( (pageIndex) => { return <PageIndex key = {pageIndex} index = {pageIndex} /> } ) }
        </div>
    )
}

export default PaginationBar;