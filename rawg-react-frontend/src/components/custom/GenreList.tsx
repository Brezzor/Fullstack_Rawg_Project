import useGenres from "@/hooks/useGenres"
import { VStack, For, Button, Heading } from "@chakra-ui/react"
import GenreItem from "@/components/custom/GenreItem"
import type { Genre } from "@/hooks/useGenres"

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error } = useGenres()

    return (
        <div>
            <VStack alignItems="start">
                <Button
                    variant={'plain'}
                    onClick={() => onSelectGenre(null)}
                    display={selectedGenre !== null ? 'block' : 'none'}
                >
                    <Heading>{selectedGenre?.name}</Heading>
                </Button>
                <For each={genres}>
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