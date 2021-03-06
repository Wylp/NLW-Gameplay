import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";
import { localizedStrings } from "../../global/localizedStrings";


export const Home = () => {
    const [category, setCategory] = useState('')

    const appointments = [
        {
            id:'1',
            guild: {
                id:'1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos pegar dima!'
        },
        {
            id:'2',
            guild: {
                id:'1',
                name: 'CS BORA',
                icon: null,
                owner: false
            },
            category: '1',
            date: '22/06 ás 20:40h',
            description: 'É hoje que vamos pegar dima!'
        }
    ]

    const handleCategorySelect = (categoryId: string) => {
        categoryId == category ? setCategory('') : setCategory(categoryId)
    }

    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            
            <View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <View style={styles.content}>
                <ListHeader 
                    title={localizedStrings.scheduledMatch}
                    subtitle={localizedStrings.total}/>

                <FlatList
                    data={appointments}
                    keyExtractor = {item => item.id}
                    renderItem = {({ item }) => (
                        <Appointment data={item}/>
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator = {false}
                />
            </View>
        </View>
    );
}