/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages';
import Cad from './src/pages/Cadastrar'
import Routes from './src/routes'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
