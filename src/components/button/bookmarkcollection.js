import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton'

import ReactGA from 'react-ga'

export default class BookmarkCollection extends Component {
    render() {
        return (
            <IconButton
                tooltip="Add Bookmark"
                touch={true}
                tooltipPosition="top-left"
                onTouchTap={this.props.onTouchTap}>
                <svg fill="#000000" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"/>
                </svg>
            </IconButton>
        )
    }
}