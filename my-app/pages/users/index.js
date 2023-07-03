import Link from 'next/link';
import path from 'path';

function Users(props)  {
    const {users}=props

    
    return (
        <ul>
        {users.map((user)=>(<li key={user.id}><Link href={`/users/${user.id}`}>{user.name}</Link></li>))}
      
    </ul>
  )
}

export async function getStaticProps(context){
    const fs = require('fs/promises')

    const filePath = path.join(process.cwd(),'data','dummy-backend.json')
     const jsonData = await fs.readFile(filePath)
     const data= JSON.parse(jsonData)

    return {
        props:{
            users : data.users
        },
        revalidate: 1
    }
}

export default Users
