import { Badge } from "@chakra-ui/react"

const CriticScore = ({score}: {score:number}) => {
    const color = score > 75 ? "green.500" : score > 50 ? "yellow.500" : "red.500";
    const bgColor = score > 75 ? "green.800" : score > 50 ? "yellow.800" : "red.800";
    
    return (
        <Badge border={"1px solid"} borderRadius={"full"} aspectRatio={1/1} fontWeight={"bold"} color={color} bgColor={bgColor}>{score}</Badge>
    )
}

export default CriticScore