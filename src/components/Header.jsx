import { View, Text, StyleSheet } from 'react-native';

export function Header( {objetivo} ){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diario de HIdratação</Text>
            <Text style={styles.subtitle}>Meta diaria: {objetivo}ml</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',

    },

    title:{
        color:'blue'/


    },

    subtitle:{
        backgroundColor:'black',
        color:'white',

    },


})