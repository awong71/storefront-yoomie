import {PageTitle} from './../components/PageTitle'

function ProductCard ({name, key, ...props}){
  return <li>{name}</li>
}





export default function Home() {
  

  return (
    <>
    <PageTitle title="storefront" tagline="featured products"/>
    {
      productData.map((uid, name) => <ProductCard key={uid} name={name}/>)
    }
    </>
  )
}
