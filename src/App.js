import React, { Component } from 'react'
import Reader from './containers/reader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Reader/>
            </MuiThemeProvider>
        )
    }
}

export default App
