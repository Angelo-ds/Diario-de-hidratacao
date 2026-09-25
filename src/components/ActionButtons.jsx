import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/color';


export function ActionPressables({aoClicar}){

    return(
        <View style={styles.container}>

            <Text>Adicionar consumo:</Text>

            <View style={styles.botoes}>

                <Pressable title='+200ml' onPress={() => aoClicar()}>

                </Pressable>
                
                <Pressable title='+350ml' onPress={() => aoClicar()}>

                </Pressable>

                <Pressable title='+500ml' onPress={() => aoClicar()}>

                </Pressable>
                <View>

                <Pressable style={styles.reiniciar} title='Reiniciar Dia'color={styles.reiniciar.color} onPress={novoDia}>
                </Pressable>

                </View>


            </View>


        </View>

    )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection:'colum',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.textMain,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },

  botoes:{
    flexDirection:'row'
  },

  reiniciar:{
    color:'red'
  },
});



