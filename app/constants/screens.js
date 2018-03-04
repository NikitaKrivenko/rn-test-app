
export const screensNames = {
  login: 'login',
  logout: 'logout',
  home: 'home',
  drawer: 'drawer',
  stackOverflow: 'stackOverflow'
};

export const sideMeuButtonsConfig = [
  {
    id: 'sideMenu'
  }
];

export default screensConfig = {
  [screensNames.home]: {
    screen: 'demoApp.Home',
    leftButtons: sideMeuButtonsConfig
  },

  [screensNames.logout]: {
    screen: 'demoApp.Logout',
    leftButtons: sideMeuButtonsConfig
  },

  [screensNames.stackOverflow]: {
    screen: 'demoApp.StackOverflow',
    leftButtons: sideMeuButtonsConfig
  },

  [screensNames.login]: {
    screen: 'demoApp.Login',
    navigatorStyle: {
      navBarHidden: true
    }
  },

  [screensNames.drawer]: {
    left: {
      screen: 'demoApp.Drawer',
      fixedWidth: 500
    }
  }
}