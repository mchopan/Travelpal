import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/colors/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MyProvider} from './src/MyContext';
import IntitailScreen from './src/components/IntitailScreen';

const App = () => {
  return (
    <MyProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={colors.light.russianviolet} />
          <IntitailScreen />
        </SafeAreaView>
      </NavigationContainer>
    </MyProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.russianviolet,
  },
});
