async function getProduct(uid) {
    const res = await fetch(
      `https://yoomieco-75413-default-rtdb.firebaseio.com/products/${uid}.json`
    );
    const product = await res.json();
    return product;
  }
  
  export { getProduct };