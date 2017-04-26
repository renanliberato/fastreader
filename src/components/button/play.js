import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'

import ReactGA from 'react-ga'

export default class Play extends Component {

    render() {
        if (this.props.passing) {
            return (
                <IconButton
                    tooltip="Pause"
                    touch={true}
                    tooltipPosition="top-left"
                    onTouchTap={this.props.onTouchTap}>
                    <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </IconButton>
            )
        }
        return (
            <IconButton
                tooltip="Play"
                touch={true}
                tooltipPosition="top-left"
                onTouchTap={this.props.onTouchTap}>
                <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5v14l11-7z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </IconButton>
        )
    }
}