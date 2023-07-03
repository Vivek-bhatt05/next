
import { Fragment } from 'react'
import path from 'path';
import fs from 'fs'

const UserdetailPage = (props) => {

   const {loadedUser}= props
  return (
    <Fragment>
      <h1>{loadedUser.name}</h1>
      <h3>{loadedUser.desc}</h3>
    </Fragment>
  )
}

async function getData(){
    const filePath = path.join(process.cwd(),'data','dummy-backend.json')
    const jsonData =  fs.readFileSync(filePath)
    const data= JSON.parse(jsonData)

    return data
}


export async function getStaticProps(context){
    const {params}=context
    const userID= params.uid;

    const data = await getData();
     const user = data.users.find(user =>user.id ===userID)

     return {
        props:{
            loadedUser : user
        }
     }
}

export async function getStaticPaths(){
    
    const data = await getData();
     const ids = data.users.map((user)=> user.id)


     const paramsPath = ids.map((id)=>({params:{uid:id}}))


    return {
        paths:paramsPath,
        fallback: true
    }
}

export default UserdetailPage
