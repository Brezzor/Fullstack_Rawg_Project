import useGames from "@/hooks/useGames"
import { For, SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "@/components/custom/GameCard"
import GameCardSkeleton from "@/components/custom/GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const GameGrid = () => {
    const { data: games, error } = useGames()
    const skeletons = [...Array(20).keys()]

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={2}>
            <For each={games} fallback={
                <For each={skeletons}>
                    {(skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    )}
                </For>
            }>
                {(game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                )}
            </For>
            {error && <Text color={'red'}>Error: {error}</Text>}
        </SimpleGrid>
    )
}

export default GameGrid