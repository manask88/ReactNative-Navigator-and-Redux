'use strict';

import React, { Component,Navigator,StyleSheet,PixelRatio ,Text,TouchableOpacity,View } from 'react-native';
import { connect } from 'react-redux/native';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import Counter1 from '../components/Counter1';
import Counter2 from '../components/Counter2';
import Counter3 from '../components/Counter3';
var NavigationBar = require('react-native-navbar');

var cssVar = require('cssVar');
@connect(state => ({
  state: state.counter
}))

class CounterApp extends Component {


  render() {

    var NavigationBarRouteMapper = {

      LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
          return null;
        }

        var previousRoute = navState.routeStack[index - 1];
        return (
          <TouchableOpacity
            onPress={() => navigator.pop()}
            style={styles.navBarLeftButton}>
            <Text style={[styles.navBarText, styles.navBarButtonText]}>
              {previousRoute.title}
            </Text>
          </TouchableOpacity>
        );
      },

      RightButton: function(route, navigator, index, navState) {
        return (
          <View />
        );
      },

      Title: function(route, navigator, index, navState) {
        return (
          <Text style={[styles.navBarText, styles.navBarTitleText]}>
            {route.title}
          </Text>
        );
      },

    };



    const { state, dispatch} = this.props;

    const actions= bindActionCreators(counterActions, dispatch)

    var SCREEN_WIDTH = require('Dimensions').get('window').width

    var BaseConfig = Navigator.SceneConfigs.FloatFromRight;
    var CustomLeftToRightGesture = Object.assign({},BaseConfig.gestures.pop,{
      spanVelocity: 80,
      edgeHitWidth: SCREEN_WIDTH,
    })


    return <Navigator
      initialRoute={{ title: "Counter 1", }}
      configureScene = {(route) => ( {...Navigator.SceneConfigs.FadeAndroid,springTension: 100,
        springFriction: 1,
        gestures: {
          pop: CustomLeftToRightGesture
        }
          }
        )
      }

      renderScene = { (route,navigator) =>  {
          switch (route.title) {

            case 'Counter 1':
              return   (
                <Counter1 navigator={navigator}
                  state={this.props.state} counter= {state.count} actions={actions}
                  route={route}       />)

            case 'Counter 2':
              return   (
                <Counter2 navigator={navigator}
                  state={this.props.state} counter= {state.count} actions={actions}
                  route={route}      />)

            default:
              return (<Counter3 navigator={navigator}
                state={this.props.state} counter= {state.count} actions= {actions}
                route={route}      />)

          }
        }
      }

            navigationBar={
              <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
                style={styles.navBar}
                />


            }
            />

        }
      }

      var styles = StyleSheet.create({
        messageText: {
          fontSize: 17,
          fontWeight: '500',
          padding: 15,
          marginTop: 50,
          marginLeft: 15,
        },
        button: {
          backgroundColor: 'white',
          padding: 15,
          borderBottomWidth: 1 / PixelRatio.get(),
          borderBottomColor: '#CDCDCD',
        },
        buttonText: {
          fontSize: 17,
          fontWeight: '500',
        },
        navBar: {
          backgroundColor: 'white',
        },
        navBarText: {
          fontSize: 16,
          marginVertical: 10,
        },
        navBarTitleText: {
          color: cssVar('fbui-bluegray-60'),
          fontWeight: '500',
          marginVertical: 9,
        },
        navBarLeftButton: {
          paddingLeft: 10,
        },
        navBarRightButton: {
          paddingRight: 10,
        },
        navBarButtonText: {
          color: cssVar('fbui-accent-blue'),
        },
        scene: {
          flex: 1,
          paddingTop: 20,
          backgroundColor: '#EAEAEA',
        },
      });

      export default CounterApp;
