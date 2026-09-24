import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/color';

export function Header( {goal} ){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diario de HIdratação</Text>
            <Text style={styles.subtitle}>Meta diaria: {goal}ml</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',

    },

    title:{
        color: COLORS.primary,


    },

    subtitle:{
        backgroundColor: COLORS.background,
        color: COLORS.S,

    },


})