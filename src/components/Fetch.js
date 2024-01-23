import React,{useState,useeffect} from 'react'

const Fetch = () => {
    const [data,setDate] = useState("")
    const [ok,setOk] = useState(false)
    async function fetch(){
        const resp = await fetch(" https://dummyjson.com/products")
        const res = await resp.json();
        setData(res.data)
        setOk(true)
    }
  return (
    <div>
        {!ok && <p>Loading...</p>}
        {data && <pre>{data}</pre>}


    </div>
  )
}

export default Fetch