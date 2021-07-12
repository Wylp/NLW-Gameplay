import React from "react";
import { 
    Text, 
    View, 
    Image
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style";
import { ButtonIcon } from "../../components/buttonIcon";
import IllustrationImg from '../../assets/illustration.png'
import { localizedStrings } from '../../global/localizedStrings'

export function SignIn(){
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Image 
                source={IllustrationImg} 
                style={styles.image}
                resizeMode="stretch"
            />
            <View
                style={styles.content}>
                <Text style={styles.title}>
                    {localizedStrings.signInTitle}
                </Text>

                <Text style={styles.subtitle}>
                    {localizedStrings.signInSubtitle}
                </Text>

                <ButtonIcon 
                    title={localizedStrings.loginOnDiscord}
                    onPress={handleSignIn}
                />
            </View>

        </View>
    );
}