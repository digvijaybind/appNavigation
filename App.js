/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Home = ({navigation}) => {
  return (
    <View>
      {/* <Button>Press Home button</Button> */}

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>This is Home</Text>

        <Button title="Go to Main" onPress={() => console.log('hii')} />
      </View>
    </View>
  );
};

const Main = ({navigation}) => {
  return (
    <View>
      <Text style={styles.MainText}> this is sample Main page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Button
          title="this is main"
          // onPress={() => navigation.navigate('Home')}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  MainText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  MainText: {
    justifyContent: 'Center',
    alignItem: 'center',
    color: 'black',
  },
  HomeButton: {
    backgroundColor: 'pink',
    fontSize: '12',
  },
});

export default App;
