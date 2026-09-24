import { StatusBar, View, Text, StyleSheet} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Header } from './src/components/Header';


export default function App(){
 
  
  return(
    <SafeAreaProvider>
      <SafeAreaView> 
      <StatusBar barStyle={'auto'}/>
      <View>
        <Header objetivo={2000} />
      </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


// import {View, Text} from 'react-native';

// import { ActionButtons } from './src/components/ActionButtons';
// import { WaterProgress } from './src/components/WaterProgress';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';



// export default function App() { 
//   const GOAL = 2000;
//   const [consumed, setConsumed] = useState(0);


//   const handleaddMeter = (amount) =>{


//   };

//   const handleReset = () =>{


//   };


//   return(
//   <SafeAreaProvider>

//     <SafeAreaView>
      
//       <StatusBar />
//       <View>

//         <Text></Text>
        
//       </View>
//     </SafeAreaView>

//   </SafeAreaProvider>
   
//   );
// }

// const styles = StyleSheet.create({

// });