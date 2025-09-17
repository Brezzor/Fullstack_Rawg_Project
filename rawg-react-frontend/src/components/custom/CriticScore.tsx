import { Badge } from "@chakra-ui/react"

const CriticScore = ({ score }: { score: number }) => {
    let color: string;
    if (score > 75) {
        color = "green.500";
    } else if (score > 50) {
        color = "yellow.500";
    } else {
        color = "red.500";
    }

    let bgColor: string;
    if (score > 75) {
        bgColor = "green.800";
    } else if (score > 50) {
        bgColor = "yellow.800";
    } else {
        bgColor = "red.800";
    }

    return (
        <Badge border={"1px solid"} rounded={"full"} aspectRatio={1} fontWeight={"bold"} color={color} bgColor={bgColor}>{score}</Badge>
    )
}

export default CriticScore