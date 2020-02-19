import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Text> Main </Text>
            </View>
        );
    }
}

