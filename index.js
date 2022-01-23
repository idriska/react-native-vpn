/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/screens/home/home';
import SpeedTest from './src/screens/speed-test/speed-test';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
