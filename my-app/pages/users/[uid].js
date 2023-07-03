import { Fragment } from 'react'
import path from 'path';

const UserdetailPage = (props) => {

   const {loadedUser}= props
  return (
    <Fragment>
      <h1>{loadedUser.name}</h1>
      <h3>{loadedUser.desc}</h3>
    </Fragment>
  )
}

export async function getStaticProps(context){

    // console.log(context)
   const {params}=context

   const userID= params.uid;

   const fs = require('fs/promises')

    const filePath = path.join(process.cwd(),'data','dummy-backend.json')
     const jsonData = await fs.readFile(filePath)
     const data= JSON.parse(jsonData)
     console.log(data)

     const user = data.users.find(user =>user.id ===userID)
     console.log(user)

     return {
        props:{
            loadedUser : user
        }
     }
}

export async function getStaticPaths(){
    return {
        paths:[
            {params : {uid:'u1'}},
            {params : {uid:'u2'}},
            {params : {uid:'u3'}},
            {params : {uid:'u4'}},
        ],
        fallback:false
    }
}

export default UserdetailPage
