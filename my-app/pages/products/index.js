import Link from "next/link"
import Nav from "../navbar"


const Products= () => {


  const products=[
    {id:"1",name:"Vivek"},
    {id:"2",name:"Ved"},
    {id:"3",name:"Hello"}
  ]



  return (
    <div>
        <Nav />
        <h1>
      Products page
        </h1>
     <div>
      <ul>
          {products.map((prod)=>(
            <li key={prod.id}>
             {/* <Link href={`/products/${prod.id}`}>{prod.name}</Link> */}
             <Link href={
              {
              pathname: '/products/[id]',
              query:{id:prod.id,name:prod.name}
             }
             }>{prod.name}</Link>
            </li>
          ))
        }
       </ul>
      </div>
    </div>
  )
}

export default Products
