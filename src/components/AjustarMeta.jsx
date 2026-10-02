import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../constants/color';

export function AjustarMeta({goal, aoApertarPositivo, aoApertarNegativo }){
    return(
        <View style= {styles.container}>
            <Text style = {styles.label}>Ajustar Meta Diária</Text> 

            <View style = {styles.row} >
              <Pressable style= {styles.button} onPress={() => aoApertarNegativo(250)}>
                <Text>-250 ml</Text>
              </Pressable>

              <Text style = {styles.goalText}> {goal}ml</Text>

              <Pressable style= {styles.button} onPress={() => aoApertarPositivo(250)}>
                <Text style = {styles.buttonText}>+250 ml</Text>
              </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    marginVertical: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.textMuted,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: COLORS.buttonLightBg,
    borderColor: COLORS.buttonLightBorder,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 13,
  },
  goalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
});