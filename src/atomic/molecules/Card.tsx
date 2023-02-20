import { Box, Image, Text } from 'native-base'
import {TouchableOpacity} from 'react-native'
import { CardProps } from '../../pages/Home'

export function Card({
    id,
    image,
    price,
    model,
    title
}: CardProps) {
    return(
        <TouchableOpacity style={{ padding: 5, width: '50%', height: 240, opacity:0.9}}
            onPress={() => {}}  
        >  
            <Box borderRadius="20px"
                p="4" flex="1" shadow="5" bg="primary.50:alpha.9"
                justifyContent="center"
                alignItems="center"
                >
                <Box>
                    <Image src={image} width="121px" h="80px" alt="image" resizeMode='contain' />
                    <Text fontSize="md" bold color="white:alpha.50">
                        {title}
                    </Text>
                </Box>
            </Box>
        </TouchableOpacity>

    )
}