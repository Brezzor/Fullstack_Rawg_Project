import { HStack, Image } from "@chakra-ui/react"
import { ColorModeButton } from '@/components/ui/color-mode'
import logo from '@/assets/logo.png'

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'}>
            <Image src={logo} height={'40px'}/>
            <ColorModeButton />            
        </HStack>
    )
}

export default NavBar