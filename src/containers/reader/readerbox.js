import React, { Component } from 'react'

import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'

import LinearProgress from 'material-ui/LinearProgress'

class ReaderBox extends Component {
    render() {
        return (
            <Row center='xs' middle='xs' style={{height: '150px'}}>
                <Col xs={12} style={{
                    fontSize: '60px',
                    marginTop: '50px'
                }}>
                    {this.props.list[this.props.current]}
                </Col>
                <Col xs={10}>
                    <LinearProgress
                        mode="determinate"
                        min={0}
                        max={this.props.list.length - 1}
                        value={this.props.current}/>
                </Col>
            </Row>
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