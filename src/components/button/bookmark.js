import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton'

export default class Bookmark extends Component {
    render() {
        return (
            <IconButton
                tooltip="Go to Bookmark"
                touch={true}
                tooltipPosition="top-left"
                onTouchTap={this.props.onTouchTap}>
                <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </IconButton>
        )
    }
}