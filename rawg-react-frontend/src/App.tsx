import './App.css'

import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={'nav'} bg={'blue.500'}>
          <NavBar />
        </GridItem>
        <GridItem display={{base: 'none', lg: `block`}} area={'aside'} bg={'tomato'}>
          aside
        </GridItem>
        <GridItem area={'main'} bg={'green.500'}>
          main
        </GridItem>
      </Grid>
  )
}

export default App
