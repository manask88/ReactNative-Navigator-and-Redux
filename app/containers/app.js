import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import CounterApp from './counterApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);


import React, {
  NavigatorIOS,
  Component
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <CounterApp />}
      </Provider>
    );
  }
}
