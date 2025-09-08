import './App.css'

import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'
import GameGrid from '@/components/custom/GameGrid'

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <GridItem display={{base: 'none', lg: `block`}} area={'aside'} bg={'tomato'}>
          aside
        </GridItem>
        <GridItem area={'main'}>
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default App
