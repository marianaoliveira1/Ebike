import { Box } from "native-base";
import { useEffect, useState } from "react";
import { DatailBackground } from "../atomic/atoms/DetailBackground";
import { Card } from "../atomic/molecules/Card";
import { MainBanner } from "../atomic/molecules/MainBanner";
import api from "../service/api";

export type CardProps = {
    title: string,
    price: number,
    model: string,
    image: string,
    id: string,

}

export function Home() {

    const [equipments, setEquipments] = useState<CardProps[]>([]);

    useEffect(() => {
        async function getEquipments() {
            try {
                const { data } = await api.get('equipments')
                setEquipments(data);
            } catch (error) {
                console.log(error);   
            }
        }
        getEquipments()
    }, [])

    return(
        <Box flex="1" padding="20px" pt="-10px" position="relative">
            < DatailBackground />
            <MainBanner />
            {
                equipments.map(equipment => 
                <Card 
                    image={equipment.image}
                    id={equipment.id}
                    model={equipment.model}
                    price={equipment.price}
                    title={equipment.title}
                />
                
                )
            }
            <Card />
        </Box>
 
    )
}