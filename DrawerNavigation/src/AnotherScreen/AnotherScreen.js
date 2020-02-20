import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Main/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AnotherScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('hello',this.props.navigation)
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Check2')} >
          <Text>Go to Check2 </Text>
        </TouchableOpacity>
        <Text> AnotherScreen </Text>
      </View>
    );
  }
}
