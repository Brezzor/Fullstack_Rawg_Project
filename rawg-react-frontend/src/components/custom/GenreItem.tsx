import { Box, HStack, Image, Button, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '@/services/image-url-handler'
import type { Genre } from '@/hooks/useGenres'

interface Props {
    genre: Genre,
    onGenreClick: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreItem = ({ genre, onGenreClick, selectedGenre }: Props) => {
    return (
        <Box>
            <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} rounded={'full'} aspectRatio={1}></Image>
                <Button
                    variant={'plain'}
                    width={100}
                    justifyContent={'start'}
                    onClick={() => onGenreClick(genre)}
                >
                    <Text
                        truncate
                        fontSize={"large"}
                        fontWeight={'bolder'}
                        color={genre.id === selectedGenre?.id ? 'red' : 'gray'}
                        wordWrap={'normal'}
                    >
                        {genre.name}
                    </Text>
                </Button>
            </HStack>
        </Box>
    )
}

export default GenreItem