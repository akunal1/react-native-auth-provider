import React, {PureComponent} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

import Login from '../Screens/Login/Login';

const styles = StyleSheet.create({
  screen: {flex: 1},
});

interface Props {
  navigation?: any;
}
class RootContainer extends PureComponent<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.screen}>
        <SafeAreaView />
        <Login navigation={navigation} />
      </View>
    );
  }
}

export default RootContainer;
