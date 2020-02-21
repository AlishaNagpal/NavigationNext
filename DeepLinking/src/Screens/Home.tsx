import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Linking } from 'react-native';
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

    // componentDidMount() {
    //     Linking.getInitialURL()
    //         .then((url) => {
    //             if (url) {
    //                 console.log(url);
    //                 console.warn('atleast',url)

    //                 // this.OpenURL({ url: url }, Utils.constant.isIOS ? 5000 : 6000)
    //             }
    //         })
    //         .catch((e) => {

    //         })
    // }

    public render() {
        return (
            <View style={styles.main}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
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

