import type { Platform } from "@/hooks/useGames"
import { HStack, For, Icon } from "@chakra-ui/react"
import type { IconType } from 'react-icons';
import { FaAndroid, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch  } from "react-icons/si";

const PlatformIconsList = ({ platforms }: { platforms: Platform[] }) => {
    const getIcon = (slug: string): IconType | undefined => {
    switch (slug) {
      case "pc":
        return FaWindows;
      case "playstation":
        return FaPlaystation;
      case "xbox":
        return FaXbox;
      case "nintendo":
        return SiNintendoswitch;
      case "android":
        return FaAndroid;
      case "ios":
        return MdPhoneIphone;
      default:
        return undefined;
    }
  }
    
    return (
        <HStack>
            <For each={platforms}>
                {(platform) => {
                    const IconComponent = getIcon(platform.slug);
                    if (!IconComponent) return null;
                    return <Icon as={IconComponent} key={platform.id} />;
                }}
            </For>
        </HStack>
    )
}

export default PlatformIconsList