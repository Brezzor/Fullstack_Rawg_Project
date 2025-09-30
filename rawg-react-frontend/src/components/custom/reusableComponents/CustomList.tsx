import { useState } from "react";

import {
    Button,
    Container,
    For,
    HStack,
    Heading,
    Image,
    List,
    Spinner,
    Text,
} from "@chakra-ui/react";

import getCroppedImageUrl from "@/services/image-url-handler";

interface Item {
    id: number;
    name: string;
    image_background: string;
}

interface Props<T> {
    onSelectItem: (item: T | null) => void;
    selectedItem: T | null;
    title: string;
    useDataHook: () => {
        data: T[];
        error: string;
    };
}

const CustomList = <T extends Item>({
    onSelectItem,
    selectedItem,
    title,
    useDataHook,
}: Props<T>) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const COLLAPSED_COUNT = 5;

    const { data: items, error } = useDataHook();

    const displayedItems = isExpanded
        ? items
        : items.slice(0, COLLAPSED_COUNT);

    if (error) return null;

    return (
        <Container paddingInline={'1rem'}>
            <Button
                variant="plain"
                onClick={() => onSelectItem(null)}
            >
                <Heading fontSize="2xl" marginBottom={3}>
                    {title}
                </Heading>
            </Button>
            <List.Root gap={2} variant={'plain'} align={'center'}>
                <For each={displayedItems} fallback={
                    <Spinner></Spinner>
                }>
                    {(item: T) => (
                        <List.Item key={item.id} padding="5px">
                            <HStack maxW={'100%'}>
                                <Image
                                    src={getCroppedImageUrl(item.image_background)}
                                    boxSize="32px"
                                    rounded={'full'}
                                    objectFit="cover"
                                />
                                <Button
                                    maxW={'100%'}
                                    variant="plain"
                                    onClick={() => onSelectItem(item)}

                                >
                                    <Text
                                        truncate
                                        fontSize="lg"
                                        color={
                                            item.id === selectedItem?.id ? "yellow" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Text>
                                </Button>
                            </HStack>
                        </List.Item>
                    )}
                </For>
                <Button onClick={() => setIsExpanded(!isExpanded)} marginY={5}>
                    {isExpanded ? "Show Less" : "Show More"}
                </Button>
            </List.Root>
            {error && <p>Error: {error}</p>}
        </Container >
    );
};

export default CustomList;