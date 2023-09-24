import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        fetch(url, {
            
        }).then((res)=>{
            if(!res.ok){
                throw Error(`no valid response from this resource`)
            }
            return res.json()

        }).then((data)=>{

            setData(data)
            setError(null)
            setIsPending(null)

        }).catch((error)=>{
            setError(error.message)
        })
     
    }, [url])
    
    return {data, isPending, error}
}

export default useFetch;