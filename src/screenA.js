import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class screenA extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Button
          title={'Go To Screen B'}
          onPress={() => {
            this.props.navigation.navigate('screenB');
          }}
        />
      </View>
    );
  }
}
const Styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
