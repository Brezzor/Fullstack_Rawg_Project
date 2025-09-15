import './App.css'

import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'
import GameGrid from '@/components/custom/GameGrid'
import GenreList from '@/components/custom/GenreList'

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        <GridItem display={{base: 'none', lg: `block`}} area={'aside'}>
          <GenreList/>
        </GridItem>
        <GridItem area={'main'}>
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default App
