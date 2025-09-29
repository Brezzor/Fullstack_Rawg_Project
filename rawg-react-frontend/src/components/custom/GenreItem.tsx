import { HStack, Image, Button, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '@/services/image-url-handler'
import type { Genre } from '@/hooks/useGenres'

interface Props {
    genre: Genre,
    onGenreClick: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreItem = ({ genre, onGenreClick, selectedGenre }: Props) => {
    return (
        <HStack width={'100%'}>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} rounded={'full'} aspectRatio={1}></Image>
            <Button
                font={'lg'}
                variant={'plain'}
                onClick={() => onGenreClick(genre)}
            >
                <Text
                    color={genre.id === selectedGenre?.id ? 'red' : 'gray'}
                    textDecorationLine={genre.id === selectedGenre?.id ? 'underline' : 'none'}
                    textDecorationThickness={'1px'}
                    textUnderlineOffset={'5px'}
                >
                    {genre.name}
                </Text>
            </Button>
        </HStack>
    )
}

export default GenreItem