import useGenres from "@/hooks/useGenres"
import { List, For, Image, HStack, Text} from "@chakra-ui/react"

const GenreList = () => {
    const { data: genres, error } = useGenres()
    
    return (
        <div>
            <List.Root as={'ul'}>
                <For each={genres}>
                    {(genre) => (
                        <List.Item key={genre.id} paddingStart={2} paddingY={2} fontWeight={'bold'} fontSize={16}>
                            <HStack>
                                <Image src={genre.image_background} height={10} aspectRatio={1/1}></Image>
                                <Text>{genre.name}</Text>
                            </HStack>                            
                        </List.Item>
                    )}
                </For>
            </List.Root>
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default GenreList