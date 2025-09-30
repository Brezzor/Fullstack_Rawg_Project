import useGenres from "@/hooks/useGenres"
import { VStack, For, Button, Heading } from "@chakra-ui/react"
import GenreItem from "@/components/custom/GenreItem"
import type { Genre } from "@/hooks/useGenres"
import { useState } from "react";

interface Props {
    onSelectGenre: (genre: Genre | null) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data: genres, error } = useGenres();
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedGenres = isExpanded ? genres : genres.slice(0, 5);

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
                <For each={displayedGenres}>
                    {(genre: Genre) => (
                        <GenreItem
                            key={genre.id}
                            genre={genre}
                            onGenreClick={(genre) => onSelectGenre(genre)}
                            selectedGenre={selectedGenre}
                        />
                    )}
                </For>
                <Button
                    variant={'outline'}
                    onClick={() => setIsExpanded(!isExpanded)}
                    display={genres.length > 5 ? 'block' : 'none'}
                >
                    <Heading>
                        {isExpanded ? 'Show Less' : 'Show More'}
                    </Heading>
                </Button>
            </VStack>
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default GenreList