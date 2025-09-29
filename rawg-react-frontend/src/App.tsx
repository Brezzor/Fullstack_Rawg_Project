import './App.css'

import { Grid, GridItem, Container } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'
import GameGrid from '@/components/custom/GameGrid'
import GenreList from '@/components/custom/GenreList'
import { useState } from 'react'
import type { Genre } from '@/hooks/useGenres'
import PlatformSelector from '@/components/custom/PlatformSelector'
import type { Platform } from '@/hooks/useGames'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '250px 1fr' }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <GridItem display={{ base: 'none', lg: `block` }} area={'aside'}>
        <Container paddingInline={'1rem'}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre} />
        </Container>
      </GridItem>
      <GridItem area={'main'}>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
