import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class screenB extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Button
          title={'Go To Screen A'}
          onPress={() => {
            this.props.navigation.navigate('screenA');
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
