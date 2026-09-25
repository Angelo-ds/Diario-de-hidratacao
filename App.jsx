import { StatusBar, View, Text} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from './src/components/Header';
import { WaterProgress } from "./src/components/WaterProgress";
// import { ActionButtons } from "./src/components/ActionButtons";


export default function App(){
  const GOAL= 300
  
  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>
        <Header goal ={GOAL} />
        <WaterProgress goal={GOAL} agua = {200}/>
        {/* <ActionButtons/> */}
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

