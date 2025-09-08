import useGames from "@/hooks/useGames"
import { For, SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react"
import GameCard from "./GameCard"

const GameGrid = () => {
    const { games, error } = useGames()

    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={2}>
            <For each={games} fallback={
                <VStack>
                    <Spinner/>
                    <Text>Loading games...</Text>
                </VStack>}>
                {(game) => (
                    <GameCard game={game} />
                )}
            </For>
            {error && <p>Error: {error}</p>}
        </SimpleGrid>
    )
}

export default GameGrid