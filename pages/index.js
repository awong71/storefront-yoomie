import { ProductCard } from '../components/ProductCard';
import {PageTitle} from './../components/PageTitle'



// https://yoomieco-75413-default-rtdb.firebaseio.com/products.json


export default function Home(props) {
  
  const products = props.products;


  return (
    <>
    <PageTitle tagline="product specials" title="Storefront"/>
    <main>
    { products.map(product=> <ProductCard key={product.uid} product={product}/>)}
    </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://yoomieco-75413-default-rtdb.firebaseio.com/products.json')
  const productData = await res.json();
  const products = Object.values(productData)
  return {
    props:{
      products
    }
  }
}
