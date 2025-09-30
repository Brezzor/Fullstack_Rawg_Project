import './App.css'

import { Grid, GridItem, Container } from '@chakra-ui/react'
import NavBar from '@/components/custom/NavBar'
import GameGrid from '@/components/custom/GameGrid'
import GenreList from '@/components/custom/GenreList'
import { useState } from 'react'
import type { Genre } from '@/hooks/useGenres'
import PlatformSelector from '@/components/custom/PlatformSelector'
import type { Platform } from '@/hooks/useGames'
import type { Store } from '@/hooks/useStore'
import StoreList from './components/custom/StoreList'

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleSelectGenre = (genre: Genre | null) => {
    setGameQuery((prev) => ({ ...prev, genre }));
  };

  const handleSelectPlatform = (platform: Platform | null) => {
    setGameQuery((prev) => ({ ...prev, platform }));
  };

  const handleSelectStore = (store: Store | null) => {
    setGameQuery((prev) => ({ ...prev, store }));
  };

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
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
          <StoreList
            onSelectStore={handleSelectStore}
            selectedStore={gameQuery.store}
          />
        </Container>
      </GridItem>
      <GridItem area={'main'}>
        <PlatformSelector
          onSelectPlatform={handleSelectPlatform}
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default App
