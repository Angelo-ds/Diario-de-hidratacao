import { StatusBar, View, Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { Header } from './src/components/Header';
import { WaterProgress } from "./src/components/WaterProgress";
import { ActionPressables } from "./src/components/ActionPressables";


export default function App(){
  const GOAL= 300;
  const [adicionarAgua, setAgua]  = useState(0)
  const agua = 500



  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>
        <Header goal ={GOAL} />
        <WaterProgress goal={GOAL} />
        <ActionPressables aoClicar={(agua)}/>
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

