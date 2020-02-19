import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Main/styles'

export default class AnotherScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Text> AnotherScreen2 </Text>
            </View>
        );
    }
}
