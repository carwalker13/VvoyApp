import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

import { Home, Description, favorites, mapp, profile } from './screens'
import Tabs from './navigation/tabs'

const Stack = createStackNavigator();
const App = () => {

    const [loaded] = useFonts({
      "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
      "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
      "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
    })
    
    if(!loaded){
      return null;
    }
    
      return (
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                      headerShown: false
                  }}
                  initialRouteName={'Home'}
              >
                  <Stack.Screen name="List" component={Tabs} />
                  <Stack.Screen name="Description" component={Description} /> 
                  <Stack.Screen name="Map" component={mapp} /> 
                 
              </Stack.Navigator>
          </NavigationContainer>
      )  
}
export default App;