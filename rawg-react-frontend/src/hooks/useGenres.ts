import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

export interface Genre {
    id: number
    name: string
}

interface GenreResponse {
    count: number
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGames] = useState<Genre[]>([])
    const [error, setError] = useState('')    

    useEffect(() => {
        const controller = new AbortController()
        
        apiClient.get<GenreResponse>('/genres', { signal: controller.signal })
            .then((res) => {
                setGames(res.data.results)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message)
                console.error(err)
            })
        return () => controller.abort()
    }, [])

    return { genres, error }
}

export default useGenres