import Counter3 from './Counter3';

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

export default class Counter2 extends Component {

  onClick(){
    this.props.navigator.push({
          title: "Counter 3"
      });
  }
  render() {
    const { counter, actions, state } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Counter: {counter}</Text>
        <TouchableOpacity onPress={actions.increment} style={styles.button}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actions.decrement} style={styles.button}>
          <Text>Descrease</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.button}>
          <Text>Go to Counter 3</Text>
        </TouchableOpacity>

      </View>
    );
  }
}
