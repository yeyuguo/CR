import React, {PropTypes} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Snackbar from '../containers/Snackbar.js'

import '../less/app.less'

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className = 'container'>
                        <ReactCSSTransitionGroup
                            component = 'div'
                            transitionName = 'page'
                            transitionEnterTimeout = {500}
                            transitionLeaveTimeout = {500}
                        >
                            {React.cloneElement(this.props.children, {
                                key: this.props.location.pathname
                            })}
                        </ReactCSSTransitionGroup>
                        <Snackbar />
                </div>
            </MuiThemeProvider>
        );
    }
}


export default App;
