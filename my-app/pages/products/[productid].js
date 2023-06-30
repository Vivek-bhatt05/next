import { useRouter } from "next/router"

const Productid = () => {

    const router = useRouter();
    // console.log(router)
    // console.log(router.pathname)
    // console.log(router.query.productid)

  return (
    <div>
      name: {router.query.productid}
    </div>
  )
}

export default Productid
