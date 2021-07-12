import React from "react";
import { Image } from 'react-native';

import { styles } from "./styles";

export const GuildIcon = () => {
    const uri = 'https://img2.gratispng.com/20180425/uoq/kisspng-discord-computer-icons-teamspeak-logo-chat-room-logo-5ae0cad83281b1.0441034115246814322069.jpg'

    return(
        <Image 
            source= {{ uri }}
            style={styles.image}
            resizeMode="cover"
        />  
    );
}