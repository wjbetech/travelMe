import { useState, useEffect } from "react"
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // abort fetch
        const controller = new AbortController()

        // turn on loading div
        setLoading(true)

        // get our trips
        axios.get(url)
        .then((result) => {
            setData(result.data)
        })

        // timeout the loading div
        setTimeout(() => {
            setLoading(false)    
        }, 1000)

        return () => {
            controller.abort()
        }

    }, [url])

    // send back our data
    return { data, loading }

}

export default useFetch;