import { useEffect, useState } from "react"
import apiClient from "@/services/api-client"
import { For, Grid, GridItem } from "@chakra-ui/react"

interface Game {
    id: number
    name: string
}

interface GameResponse {
    count: number
    results: Game[]
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get<GameResponse>('/games')
            .then((res) => {
                setGames(res.data.results)
            })
            .catch((err) => {
                setError(err.message)
                console.error(err)
            })
    }, [])

    return (
        <Grid>
            <For each={games} fallback={<p>Loading...</p>}>
                {(game) => (
                    <GridItem key={game.id} padding={2} margin={2}>
                        {game.name}
                    </GridItem>
                )}
            </For>
            {error && <p>Error: {error}</p>}
        </Grid>
    )
}

export default GameGrid