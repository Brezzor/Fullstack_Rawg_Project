import { HStack, Skeleton } from "@chakra-ui/react"

const GenreSkeleton = () => {
    return (
        <HStack>
            <Skeleton boxSize={'32px'} rounded={'full'} aspectRatio={1}></Skeleton>
            <Skeleton height="20px" width="100px" />
        </HStack>
    )
}

export default GenreSkeleton