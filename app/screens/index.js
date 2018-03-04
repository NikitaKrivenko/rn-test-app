import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Login from "./login";
import Home from "./home";
import Logout from "./logout";
import Drawer from "./drawer";
import StackOverflow from "./stackOverflow";

export default function registerScreens(store) {
  Navigation.registerComponent('demoApp.Login', () => Login, store, Provider);
  Navigation.registerComponent('demoApp.Home', () => Home, store, Provider);
  Navigation.registerComponent('demoApp.Logout', () => Logout, store, Provider);
  Navigation.registerComponent('demoApp.Drawer', () => Drawer, store, Provider);
  Navigation.registerComponent('demoApp.StackOverflow', () => StackOverflow, store, Provider);
}