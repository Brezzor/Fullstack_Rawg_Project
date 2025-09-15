import { Badge } from "@chakra-ui/react"

const CriticScore = ({score}: {score:number}) => {
    return (
        <Badge border={"1px solid"} borderRadius={"full"} aspectRatio={1/1} fontWeight={"bold"}>{score}</Badge>
    )
}

export default CriticScore