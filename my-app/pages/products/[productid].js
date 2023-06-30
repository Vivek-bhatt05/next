import { useRouter } from "next/router"

const Productid = () => {

    const router = useRouter();
    console.log(router)
    console.log(router.pathname)
    console.log(router.query)

  return (
    <div>
      name: {router.query.productid} : {router.query.name}
    </div>
  )
}

export default Productid
