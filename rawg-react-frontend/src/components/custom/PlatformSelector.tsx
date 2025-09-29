import type { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal, For, Text } from "@chakra-ui/react"

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data: parent_platforms, error } = usePlatforms();
    if (error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant={'outline'} size={'sm'}>
                    {selectedPlatform ? selectedPlatform.name : "Platforms"}
                </Button>
            </Menu.Trigger>
            <Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <For each={parent_platforms} >
                                {(platform: Platform) =>
                                    <Menu.Item
                                        key={platform.id}
                                        value={platform.slug}
                                        onClick={() => onSelectPlatform(platform)}
                                    >
                                        <Text
                                            color={platform.id === selectedPlatform?.id ? 'red' : 'grey'}
                                            textDecorationLine={platform.id === selectedPlatform?.id ? 'underline' : 'none'}
                                            textUnderlineOffset={'5px'}
                                        >
                                            {platform.name}
                                        </Text>
                                    </Menu.Item>}
                            </For>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Trigger>
        </Menu.Root>
    )
}

export default PlatformSelector;