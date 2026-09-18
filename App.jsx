import {View, Text} from 'react-native';
import { Header } from './src/components/Header';
import { ActionButtons } from './src/components/ActionButtons';
import { WaterProgress } from './src/components/WaterProgress';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';



export default function App() { 
  const GOAL = 2000;
  const [consumed, setConsumed] = useState(0);


  const handleaddMeter = (amount) =>{


  };

  const handleReset = () =>{


  };


  return(
  <SafeAreaProvider>

    <SafeAreaView>
      <StatusBar barStyle = "dark-content" backgroundColor={COLORS.background}>

        <View style={styles.content}></View>

        <Header/>
        <ActionButtons/>
        <WaterProgress/>

    </SafeAreaView>

  </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({

});