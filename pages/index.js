import Head from 'next/head'

import { loadStripe } from '@stripe/stripe-js';

import { ProductCard } from '../components/ProductCard';
import {PageTitle} from './../components/PageTitle'



// https://yoomieco-75413-default-rtdb.firebaseio.com/products.json


export default function Home(props) {
  
  const products = props.products.slice(0,3);


  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <>
    <Head>
    <meta charset="UTF-8"/>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Storefront</title>
    </Head>
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
    },
    revalidate: 60
  }
}
