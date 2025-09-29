import useData from "@/hooks/useData"
import type { Genre } from "@/hooks/useGenres"
import { useMemo } from "react"
import type { Store } from "@/hooks/useStore"

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    parent_platforms: { platform: Platform }[]
    metacritic: number
}

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null, selectedStore: Store | null) => {
    const requestConfig = useMemo(
        () => ({ params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id, stores: selectedStore?.id } }),
        [selectedGenre?.id, selectedPlatform?.id, selectedStore?.id]
    );
    return useData<Game>(
        '/games',
        requestConfig
    );
}

export default useGames