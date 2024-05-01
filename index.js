/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import about from './src/component/about';
import mainslider from './src/component/mainslider';
import {name as appName} from './app.json';
import About from './src/component/about';
import Mainslider from './src/component/mainslider';
import Heading from './src/component/heading';
import Searchbar from './src/component/searchbar';
import navaigationscreen from './src/component/navigation/navaigationscreen';
import Homescreen from './src/component/navigation/homescreen';
import Secondmenuitem from './src/component/aboutpagecomponent/secondmenuitem';
import Navaigationscreen from './src/component/navigation/navaigationscreen';
import Customnavheader from './src/component/navigation/customnavheader';

AppRegistry.registerComponent(appName, () => Navaigationscreen);
