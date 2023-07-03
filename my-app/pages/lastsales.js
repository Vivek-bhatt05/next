import { useEffect, useState } from "react";
import useSwr from 'swr';


const Lastsales = (props) => {

        const { data, error } = useSwr('https://nextjs-326f9-default-rtdb.firebaseio.com/sales.json', (url) => fetch(url).then(res => res.json()))

           const newData=[];

            for(const key in data){
                newData.push({
                    id:key,
                    username: data[key].username,
                    volume: data[key].volume
                })
            }

    console.log(newData)

    if(error){
        return <p>....error</p> 
    }

    if(!data){
        return <p>....loading</p>
    }

  return (
    <ul>
        {newData.length>0&&newData.map((sale)=>(
            <li key={sale.id}>
                {sale.username} --- {sale.volume}
            </li>
        ))}
    </ul>
  )
}

export async function getStaticProps(){

        fetch ('https: //nextjs-326f9-default-rtdb.firebaseio.com/sales.json')
        .then((res)=> res. json())
        .then ((data)=>{
            const newData=[];
            for (const key in data){
            newData.push ({
            id:key,
            username: data [key] .username, volume: data [key]. volume
            })
        }
        return {
            props:{
                data: newData
            },
            revalidate : 10
        }

    })

}
export default Lastsales
