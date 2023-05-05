import { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts';

export const useFetchProducts = () => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const getImages = async() =>{
      const newImages =  await getProducts();
      setImages(newImages);
      setIsLoading(false);
    }
  
   
    console.log("imagesEnviadas",images)
    useEffect(() => {
      getImages();
    
    }, [])
    
  return {
   images: images,
   isLoading: isLoading
  }
}
