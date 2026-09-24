import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants/color';

export function WaterProgress({agua,goal}){
    const progresso = (Math.min((agua / goal) * 100,100)).toFixed(0);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Você bebeu {agua}ml de água hoje.</Text>
            <Text style={styles.subtitle}>Você atingiu {progresso}% da Meta</Text>

            <View style={styles.barra}>
                <View style={[styles.progresso_barra, { width: `${progresso}%` }]} />
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height: '100%',
        width: '100%'

    },

    title:{
        color: COLORS.primary,


    },

    subtitle:{
        backgroundColor: COLORS.background,
        color: COLORS.secondary,

    },

    barra:{
        height:'30',
        width:'100%',
        backgroundColor: 'blue',
    },

    progresso_barra:{
        height: '100%',
        backgroundColor:'green',
        color:'blue',
    }

})

