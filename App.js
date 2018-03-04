import store from './app/store';
import {Navigation} from 'react-native-navigation';
import registerScreens from './app/screens';
import {initializeApp} from "./app/actions";
import screensConfig, {screensNames} from './app/constants/screens';

registerScreens(store);

store.subscribe(function () {
  const {isAuthorized} = store.getState().user;
  const shouldUpdateApp = isAuthorized !== this.isAuthorized;

  if (shouldUpdateApp) {
    this.isAuthorized = isAuthorized;

    if (isAuthorized) {
      Navigation.startSingleScreenApp({
        screen: screensConfig[screensNames.home],
        drawer: screensConfig[screensNames.drawer],
      });
    } else {
      Navigation.startSingleScreenApp({
        screen: screensConfig[screensNames.login]
      });
    }
  }
});

store.dispatch(initializeApp());