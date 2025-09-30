import useData from "@/hooks/useData"
import { useMemo } from "react"
import type { GameQuery } from "@/App"

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface Game {
    id: number
    name: string
    background_image: string
    metacritic: number
    parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery: GameQuery) => {
    const requestConfig = useMemo(
        () => (
            {
                params:
                {
                    genres: gameQuery.genre?.id,
                    platforms: gameQuery.platform?.id,
                    stores: gameQuery.store?.id
                }
            }),
        [gameQuery]
    );
    return useData<Game>(
        '/games',
        requestConfig
    );
}

export default useGames