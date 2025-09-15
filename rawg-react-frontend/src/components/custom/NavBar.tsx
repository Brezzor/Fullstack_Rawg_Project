import { Stack, Image } from "@chakra-ui/react"
import { ColorModeButton } from '@/components/ui/color-mode'
import logo from '@/assets/logo.png'

const NavBar = () => {
    return (
        <Stack direction={{base: 'column', lg: 'row'}} justifyContent={{base:'space-between'}} padding={'0.8rem'}>
            <Image src={logo} height={'40px'}/>
            <ColorModeButton />            
        </Stack>
    )
}

export default NavBar