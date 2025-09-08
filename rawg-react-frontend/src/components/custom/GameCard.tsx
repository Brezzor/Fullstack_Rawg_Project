import type { Game } from "@/hooks/useGames"
import { Card, Heading, Image } from "@chakra-ui/react"

interface GameCardProps {
    game: Game
}

const GameCard = ({ game }: GameCardProps) => {
    return (
        <Card.Root>
            <Card.Header>
                <Heading>{game.name}</Heading>
            </Card.Header>
            <Card.Body>
                <Image src={game.background_image}/>
            </Card.Body>
        </Card.Root>
    )
}

export default GameCard