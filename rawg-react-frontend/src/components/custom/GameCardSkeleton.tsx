import { Card, Skeleton } from "@chakra-ui/react"

const GameCardSkeleton = () => {
    return (
        <Card.Root borderRadius={"md"} overflow="hidden">
            <Card.Header padding={0}>
                <Skeleton maxHeight={400} maxWidth={600} borderTopRadius={{ base: 'md' }} aspectRatio={16 / 9} />
            </Card.Header>
            <Card.Body>
                <Skeleton height="20px" marginBottom="10px" />
                <Skeleton height="30px" />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCardSkeleton