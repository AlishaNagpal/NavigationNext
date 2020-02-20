import * as React from 'react';
import { Animated } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from "./src/Screens/Home";
import Main from './src/Screens/Main'

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 100,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const forFade2 = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
            // gestureDirection: 
            // 'vertical'
            // 'horizontal'
            // 'horizontal-inverted'
            // 'vertical-inverted'
            // cardStyleInterpolator: forFade
            // headerStyleInterpolator: forFade
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;