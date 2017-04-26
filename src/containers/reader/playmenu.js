import React, { Component } from 'react';

import { connect } from 'react-redux'

import { resetAction } from '../../actions/reader/reset'
import { backwardAction } from '../../actions/reader/backward'
import { forwardAction } from '../../actions/reader/forward'

import Forward10 from '../../components/button/forward10'
import Play from '../../components/button/play'
import Replay10 from '../../components/button/replay10'

class PlayMenu extends Component {

    constructor(props) {
        super(props)
        this.goBackward = this.goBackward.bind(this)
        this.goForward = this.goForward.bind(this)
    }


    goBackward() {
        this.props.backwardAction(this.props.list.length, this.props.current)
    }

    goForward() {
        this.props.forwardAction(this.props.list.length, this.props.current)
    }

    render() {
        return (
            <div className='row' style={{
                paddingBottom: '20px'
            }}>
                <div className='col-xs'>
                    <Replay10 onTouchTap={this.goBackward}/>
                </div>
                <div className='col-xs'>
                    <Play passing={this.props.passing} onTouchTap={this.props.toggle} />
                </div>
                <div className='col-xs'>
                    <Forward10 onTouchTap={this.goForward} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current: state.current,
        list: state.list,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        backwardAction: (current) => dispatch(backwardAction(current)),
        forwardAction: (current) => dispatch(forwardAction(current)),
        resetAction: () => dispatch(resetAction()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayMenu)