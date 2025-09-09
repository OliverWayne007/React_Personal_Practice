import { useEffect } from 'react';
import { useState } from 'react'

import PaginationBar from './components/PaginationBar';

import AppContext from './Context/AppContext';

import Image from './components/Image';

function App() 
{
  const [pageIndices , setPageIndices] = useState(0);

  const [currentPageIndex , setCurrentPageIndex] = useState(1);

  const [imageList , setImageList] = useState([]);

  const fetchPageIndices = async () => {
    const response = await fetch("http://localhost:8001/api/images/count");
    const data = await response.json();
    const image_count = data.image_count;
    setPageIndices(image_count);
  }

  const fetchImageData = async () => {
    const response = await fetch(`http://localhost:8001/api/images/${currentPageIndex}`);
    const data = await response.json();
    const image_data = data.image_data;
    setImageList([image_data]);
  }

  useEffect( () => {
    fetchPageIndices();
  } , [] );

  useEffect( () => {
    // Fetch image data from the backend
    fetchImageData();
  } , [currentPageIndex] );

  return (
    <div className='App'>
      <div className='screen'>
        { imageList.length === 0 ? <h1 className='Loading'> Loading.... </h1> : imageList.map( (imageObject) => { return <Image key = {imageObject.image_id} url = {imageObject.image_url} /> } ) }
      </div>
      <AppContext.Provider value = { { pageIndices: pageIndices , currentPageIndex: currentPageIndex , setCurrentPageIndex: setCurrentPageIndex} }>
        <PaginationBar/>
      </AppContext.Provider>
    </div>
  )
}

export default App
