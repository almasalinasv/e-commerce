import { useEffect, useState } from 'react'
import { getProducts } from '../helpers/getProducts';

export const useFetchProducts = (complemento) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const getData = async() =>{
      const newData =  await getProducts(complemento);
      setData(newData);
      setIsLoading(false);
    }
  
   
    useEffect(() => {
      getData();
    
    }, [])
    
  return {
   data: data,
   isLoading: isLoading
  }
}
