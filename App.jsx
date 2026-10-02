import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from './src/components/Header';
import { WaterProgress } from "./src/components/WaterProgress";
import { ActionPressables } from "./src/components/ActionButtons";
import { COLORS } from "./src/constants/color"; 


export default function App(){
  const GOAL= 10000;
  const [adicionarAgua, setAgua]  = useState(0)

  const handleAddWater = (ml) => {

    setAgua((memoria) => memoria + ml);
  };

  const handleReset = () => {

    setAgua(0);

  };


  return(
    <SafeAreaProvider>

      <SafeAreaView style = {styles.container}> 

      <StatusBar barStyle={'auto'}/>

      <View style = {styles.content}>

        <Header goal ={GOAL} />
        <WaterProgress agua = {adicionarAgua} goal={GOAL} />
        <ActionPressables aoClicar={handleAddWater} aoResetar={handleReset}/>

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

