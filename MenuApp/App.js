// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ManageMenuScreen from './screens/ManageMenuScreen';
import FilterScreen from './screens/FilterScreen';

const Stack = createStackNavigator();

const App = () => {
  const [menuItems, setMenuItems] = React.useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {() => <HomeScreen menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="ManageMenu">
          {() => <ManageMenuScreen menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="FilterMenu">
          {() => <FilterScreen menuItems={menuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
