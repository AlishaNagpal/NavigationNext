import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface MainProps {
}

export interface MainState {
}

export default class MainComponent extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={styles.main}>
        <Text>Main Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
