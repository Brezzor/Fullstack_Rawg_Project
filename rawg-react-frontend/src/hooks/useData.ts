import apiClient from "@/services/api-client"
import { CanceledError, type AxiosRequestConfig } from "axios"
import { useEffect, useState } from "react"

interface Response<Type> {
    count: number
    results: Type[]
}

const useGames = <Type>(
    path: string,
    requestConfig?: AxiosRequestConfig
) => {
    const [data, setData] = useState<Type[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<Response<Type>>(path, { signal: controller.signal, ...requestConfig },)
            .then((res) => {
                setData(res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                console.error(err)
            })
        return () => controller.abort()
    }, [path, requestConfig]);

    return { data, error }
}

export default useGames