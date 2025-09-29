import useStore, { type Store } from "@/hooks/useStore"
import getCroppedImageUrl from "@/services/image-url-handler"
import { VStack, For, Text, HStack, Image, Button, Heading } from "@chakra-ui/react"

interface Prop {
    onSelectStore: (store: Store | null) => void;
    selectedStore: Store | null;
}

const StoreList = ({ onSelectStore, selectedStore }: Prop) => {
    const { data: stores, error } = useStore()
    return (
        <div>
            <VStack alignItems="start">
                <Button
                    variant={'plain'}
                    onClick={() => onSelectStore(null)}
                    display={selectedStore !== null ? 'block' : 'none'}
                >
                    <Heading>{selectedStore?.name}</Heading>
                </Button>
                <For each={stores}>
                    {(store) => (
                        <HStack>
                            <Image src={getCroppedImageUrl(store.image_background)} boxSize={'32px'} aspectRatio={1} rounded={'full'} />
                            <Button
                                onClick={() => onSelectStore(store)}
                                variant={'plain'}
                                font={'lg'}
                            >
                                <Text
                                    color={store.id === selectedStore?.id ? 'red' : 'grey'}
                                    textDecorationLine={store.id === selectedStore?.id ? 'underline' : 'none'}
                                    textUnderlineOffset={'5px'}
                                >
                                    {store.name}
                                </Text>
                            </Button>
                        </HStack>
                    )}
                </For>
            </VStack>
            {error && <p>Error: {error}</p>}
        </div>
    )
}

export default StoreList