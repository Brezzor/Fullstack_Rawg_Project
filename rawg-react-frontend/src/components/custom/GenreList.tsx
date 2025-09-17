import useGenres from "@/hooks/useGenres"
import { Container, VStack, For } from "@chakra-ui/react"
import GenreItem from "@/components/custom/GenreItem"
import GenreSkeleton from "@/components/custom/GenreSkeleton"

const GenreList = () => {
    const { data: genres, error } = useGenres()
    const skeletons = [...Array(20).keys()]

    return (
        <Container>
            <VStack alignItems="start">
                <For each={genres} fallback={
                    <For each={skeletons}>
                        {(number) => <GenreSkeleton key={number} />}
                    </For>
                }>
                    {(genre) => (
                        <GenreItem key={genre.id} genre={genre} />
                    )}
                </For>
            </VStack>
            {error && <p>Error: {error}</p>}
        </Container>
    )
}

export default GenreList