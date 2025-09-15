import useGames from "@/hooks/useGames"
import { For, SimpleGrid } from "@chakra-ui/react"
import GameCard from "@/components/custom/GameCard"
import GameCardSkeleton from "@/components/custom/GameCardSkeleton"

const GameGrid = () => {
    const { games, error } = useGames()
    const skeletons = [...Array(20).keys()]

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={2}>
            <For each={games} fallback={
                <For each={skeletons}>
                    {(skeleton) => (
                        <GameCardSkeleton key={skeleton}/>
                    )}
                </For>
            }>
                {(game) => (
                    <GameCard key={game.id} game={game}/>
                )}
            </For>
            {error && <p>Error: {error}</p>}
        </SimpleGrid>
    )
}

export default GameGrid