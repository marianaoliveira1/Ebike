import { Image } from "native-base";

import detailImg from '../../img/detail.png'

export function DatailBackground() {
    return(
        <Image source={detailImg} alt="detail of home" 
        position="absolute" top="140" bottom="0" right="0"
        />
    )
}