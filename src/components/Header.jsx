import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../constants/color';

export function Header( {goal} ){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>💧Diario de HIdratação</Text>
            <Text style={styles.subtitle}>Meta diaria: {goal}ml</Text>
        </View>

    )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primaryDark,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginTop: 4,
  },
});