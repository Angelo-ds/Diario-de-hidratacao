import { View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants/color';

export function WaterProgress({agua,goal}){
    const progresso = (Math.min((agua / goal) * 100,100)).toFixed(0);
    return(
        <View style={styles.card}>
            <Text style={styles.consumedText}>Você bebeu {agua}ml de água hoje.</Text>
            <Text style={styles.percentageText}>Você atingiu {progresso}% da Meta</Text>
            
            <View style={styles.progressBarBackground}>
                <View style={[styles.progressBarFill, { width: `${progresso}%` }]} />
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardbg,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  consumedText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  percentageText: {
    fontSize: 14,
    color: COLORS.textMuted,
    marginBottom: 16,
  },
  progressBarBackground: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0F2FE',
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 6,
  },
});