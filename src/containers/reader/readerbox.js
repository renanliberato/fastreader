import React, { Component } from 'react'

import { connect } from 'react-redux'

import LinearProgress from 'material-ui/LinearProgress'

class ReaderBox extends Component {
    render() {
        return (
            <div className='row center-xs middle-xs' style={{height: '150px'}}>
                <div className='col-xs-12' style={{
                    fontSize: '60px',
                    marginTop: '50px'
                }}>
                    {this.props.list[this.props.current]}
                </div>
                <div className='col-xs-10'>
                    <LinearProgress
                        mode="determinate"
                        min={0}
                        max={this.props.list.length - 1}
                        value={this.props.current}/>
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

export default connect(
    mapStateToProps,
    null
)(ReaderBox)