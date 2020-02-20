import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export interface HomeProps {
    navigation?: any
}

export interface HomeState {
}

export default class HomeComponent extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        console.log('getting Value', this.props);
        
    }

    public render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')}>
                    <Text> Go To Main </Text>
                </TouchableOpacity>
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