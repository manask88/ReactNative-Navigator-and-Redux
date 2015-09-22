import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});


export default class Counter3 extends Component {

  render() {

    const { counter, actions, state } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Counter: {state.count}</Text>
        <TouchableOpacity onPress={actions.increment} style={styles.button}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actions.decrement} style={styles.button}>
          <Text>Decrease</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
