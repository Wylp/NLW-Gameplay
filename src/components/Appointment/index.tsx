import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text } from 'react-native';

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import { GuildIcon } from "../GuildIcon";
import { styles } from "./styles";
import { categories } from "../../utils/Categories";
import { theme } from "../../global/styles/theme";
import { localizedStrings } from "../../global/localizedStrings";

export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean
}

export type AppointmentsProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string,
}

type Props = RectButtonProps & {
    data: AppointmentsProps
}

export const Appointment = ({data, ...rest}: Props) => {

    const [category] = categories.filter(item => item.id == data.category);
    const {
        owner
    } = data.guild;

    const {
        primary,
        on
    } = theme.colors;

    return(
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>

                        <Text style = {styles.category}>
                            { category.title }
                        </Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                { data.date }
                            </Text>
                        </View>
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill = { owner ? primary : on}/>

                            <Text style={[
                                styles.player, 
                                {color: owner ? primary : on}
                            ]}>
                                    {owner ? localizedStrings.host : localizedStrings.visitor}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    );
}