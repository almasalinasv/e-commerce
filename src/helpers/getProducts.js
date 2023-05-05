
export const getProducts = async() => {
    const url = 'https://fakestoreapi.com/products'
    const resp = await fetch(url);
    const data = await resp.json();
    

  
    const clothes  = data.map(product =>({
      id: product.id,
      title: product.title,
      url: product.image,
      category: product.category,
      description: product.description,
      price: product.price
    }))
    console.log("clothes",clothes)
  
    return clothes;
}
