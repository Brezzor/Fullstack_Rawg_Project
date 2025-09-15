import useGenres from "@/hooks/useGenres"
import { Box, For } from "@chakra-ui/react"

const GenreList = () => {
    const { genres, error } = useGenres()
    
    return (
        <div>
            <Box as={'ul'} listStyleType={'none'} padding={2} margin={0}>
                <For each={genres}>
                    {(genre) => (
                        <Box as={'li'} key={genre.id}>
                            {genre.name}
                        </Box>
                    )}
                </For>
            </Box>
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default GenreList