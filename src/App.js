import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from './sr5_name_only.png';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {fullBlack, grey600, pinkA200, pinkA400, pinkA100, fullWhite} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import {Spacing} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
    spacing: Spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: fullBlack,
        primary2Color: fullBlack,
        primary3Color: grey600,
        accent1Color: pinkA200,
        accent2Color: pinkA400,
        accent3Color: pinkA100,
        textColor: fullWhite,
        secondaryTextColor: (0, fade)(fullWhite, 0.7),
        alternateTextColor: '#303030',
        canvasColor: '#303030',
        borderColor: (0, fade)(fullWhite, 0.3),
        disabledColor: (0, fade)(fullWhite, 0.3),
        pickerHeaderColor: (0, fade)(fullWhite, 0.12),
        clockCircleColor: (0, fade)(fullWhite, 0.12)
    }
});

class App extends Component {
  render() {
    injectTapEventPlugin();
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
        <div className="App">
            <AppBar title="Shadowrun Companion"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="Shadowrun" />
          </div>
          <p className="App-intro">
            Shadowrun 3rd Ed. pen & paper RPG Game Master tool suite.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
