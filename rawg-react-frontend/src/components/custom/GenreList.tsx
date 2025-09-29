import useGenres from "@/hooks/useGenres"
import { Container, VStack, For } from "@chakra-ui/react"
import GenreItem from "@/components/custom/GenreItem"
import GenreSkeleton from "@/components/custom/GenreSkeleton"
import type { Genre } from "@/hooks/useGenres"

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
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
                        <GenreItem
                            key={genre.id}
                            genre={genre}
                            onGenreClick={(genre) => onSelectGenre(genre)}
                            selectedGenre={selectedGenre}
                        />
                    )}
                </For>
            </VStack>
            {error && <p>Error: {error}</p>}
        </Container>
    )
}

export default GenreList