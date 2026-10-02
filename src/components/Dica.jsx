import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/color';

export function Dica(){

    return(
  
      <View style = {styles.container}>

          <Text style = {styles.icon}>🔎</Text>
          
          <View style= {styles.textContainer}>

            <Text style = {styles.title}>Dica de Saúde</Text>
            <Text style = {styles.descricao}>Beber água regularmente melhora a concentração, a digestão e mantém a sua energia ao longo do dia!</Text>
            
          <View/>

      </View>
      </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 16,
    paddingHorizontal: 8,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
    marginBottom: 2,
  },
  descricao: {
    fontSize: 12,
    color: COLORS.textMuted,
    lineHeight: 16,
  },
});