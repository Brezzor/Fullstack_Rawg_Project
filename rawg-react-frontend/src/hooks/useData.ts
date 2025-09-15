import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface Response<Type> {
    count: number
    results: Type[]
}

const useGames = <Type>(path:string) => {
    const [data, setData] = useState<Type[]>([])
    const [error, setError] = useState('')    

    useEffect(() => {
        const controller = new AbortController()
        
        apiClient.get<Response<Type>>(path, { signal: controller.signal })
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                console.error(err)
            })
        return () => controller.abort()
    }, [path])

    return { data, error }
}

export default useGames