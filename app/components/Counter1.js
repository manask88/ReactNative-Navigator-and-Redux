import Counter2 from './Counter2';
import { connect } from 'react-redux/native';

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

export default class Counter1 extends Component {

  onClick(){
    this.props.navigator.push({
          title: "Counter 2",
      });
  }


  render() {

    const { counter, actions, state, value } = this.props;

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Counter: {counter}</Text>
        <TouchableOpacity onPress={ actions.increment}  style={styles.button}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={actions.decrement} style={styles.button}>
          <Text>Decrease</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.button}>
          <Text>Go to Counter 2</Text>
        </TouchableOpacity>


      </View>
    );
  }
}
