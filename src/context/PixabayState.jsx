import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'
const PixabayState = (props) => {
  const [imageData, setimageData] = useState([])
  const [query, setQuery] = useState('london')


    const api_key="49235907-fca8eab49aaf19ca052971586";
    useEffect(() => {
    const fetchData = async () => {
        const api= await fetch(
            `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`
        );
            const data = await api.json ()
            setimageData(data.hits)
            console.log(data.hits);
    };
    fetchData();
    }, [query]);
    const fetchImageByCategory =async (cat) =>{
      const api= await fetch(
        `https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`
    );
        const data = await api.json ()
        setimageData(data.hits)
        console.log(data.hits);
    }
    
  return (
    <PixabayContext.Provider value={{imageData, fetchImageByCategory, setQuery}}>
      {props.children}</PixabayContext.Provider>
  )
}

export default PixabayState