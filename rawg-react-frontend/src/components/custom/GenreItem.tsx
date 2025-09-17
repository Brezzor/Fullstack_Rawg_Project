import { HStack, Image, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '@/services/image-url-handler'
import type { Genre } from '@/hooks/useGenres'

interface Props {
    genre: Genre
}

const GenreItem = ({ genre }: Props) => {
    return (
        <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} boxSize={'32px'} rounded={'full'} aspectRatio={1}></Image>
            <Text>{genre.name}</Text>
        </HStack>
    )
}

export default GenreItem