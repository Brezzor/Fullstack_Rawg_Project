import useGenres from "@/hooks/useGenres"
import { VStack, For, Button, Heading } from "@chakra-ui/react"
import GenreItem from "@/components/custom/GenreItem"
import GenreSkeleton from "@/components/custom/GenreSkeleton"
import type { Genre } from "@/hooks/useGenres"

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error } = useGenres()
    const skeletons = [...Array(20).keys()]

    return (
        <div>
            <VStack alignItems="start">
                <Button variant={'plain'} onClick={() => onSelectGenre(null)}>
                    <Heading>{selectedGenre?.name}</Heading>
                </Button>
                <For each={genres} fallback={
                    <For each={skeletons}>
                        {(number) => <GenreSkeleton key={number} />}
                    </For>
                }>
                    {(genre: Genre) => (
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
        </div>
    )
}

export default GenreList