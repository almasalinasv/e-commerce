
export const getProducts = async(complemento) => {
    const url = `https://fakestoreapi.com/${complemento}`
    const resp = await fetch(url);
    const data = await resp.json();
    

if (complemento === 'products')  {
    const clothes  = data.map(product =>({
      id: product.id,
      title: product.title,
      url: product.image,
      category: product.category,
      description: product.description,
      price: product.price
    }))
    return clothes;
  }

  if (complemento === 'carts'){

    const carts = data.map(cart =>({
      id: cart.id,
      userid: cart.userId,
      date: cart.date,
      products: cart.products.map(product => ([
      {productid: product.productId,
         quantity: product.quantity}
    ]))
  }))
    return carts;
  }
  return;
   
}
