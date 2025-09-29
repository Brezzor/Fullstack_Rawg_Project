import './App.css'

import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'
import GameGrid from '@/components/custom/GameGrid'
import GenreList from '@/components/custom/GenreList'
import { useState } from 'react'
import type { Genre } from '@/hooks/useGenres'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem display={{ base: 'none', lg: `block` }} area={'aside'}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area={'main'}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
