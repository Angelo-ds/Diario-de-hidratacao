import { StatusBar, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from './src/components/Header';
import { WaterProgress } from "./src/components/WaterProgress";
import { ActionPressables } from "./src/components/ActionButtons";
import { COLORS } from "./src/constants/color"; 
import { Dica } from "./src/components/Dica";
import { AjustarMeta } from "./src/components/AjustarMeta";

export default function App(){

  const [agua, setAgua] = useState(0);
  const [goal, setGoal] = useState(2000); 


  const handleAddWater = (ml) => {
    setAgua((memoria) => memoria + ml);
  };


  const handleReset = () => {
    setAgua(0);
  };


  const handleAumentarMeta = (ml) => {
    setGoal((metaAtual) => metaAtual + ml);
  };


  const handleDiminuirMeta = (ml) => {
    setGoal((metaAtual) => Math.max(0, metaAtual - ml));
  };

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}> 
        <StatusBar barStyle={'auto'}/>

        <View style={styles.content}>

          <Header goal={goal} />

          <AjustarMeta aoApertarPositivo={handleAumentarMeta} aoApertarNegativo={handleDiminuirMeta} goal = {goal}/>

          <WaterProgress agua={agua} goal={goal} />

          <ActionPressables aoClicar={handleAddWater} aoResetar={handleReset}/>

          <Dica/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});