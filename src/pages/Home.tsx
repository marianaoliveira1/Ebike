import { Box } from "native-base";
import { DatailBackground } from "../atomic/atoms/DetailBackground";
import { Card } from "../atomic/molecules/Card";
import { MainBanner } from "../atomic/molecules/MainBanner";

export function Home() {
    return(
        <Box flex="1" padding="20px" pt="-10px" position="relative">
            < DatailBackground />
            <MainBanner />
            <Card />
        </Box>
 
    )
}