import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Badge from 'material-ui/Badge'
import IconButton from 'material-ui/IconButton'
import LinearProgress from 'material-ui/LinearProgress'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'

import Bookmark from '../../components/button/bookmark';
import BookmarkCollection from '../../components/button/bookmarkcollection';
import Forward10 from '../../components/button/forward10';
import Play from '../../components/button/play';
import Replay10 from '../../components/button/replay10';

import { passAction } from '../../actions/reader/pass'
import { bookmarkAction, goToBookmarkAction } from '../../actions/reader/bookmark'
import { resetAction } from '../../actions/reader/reset'
import { backwardAction } from '../../actions/reader/backward'
import { forwardAction } from '../../actions/reader/forward'
import { speedAction } from '../../actions/reader/speed'

class Reader extends Component {

    constructor(props) {
        super(props)
        this.state = {passing : false, readingProcess : null}
        this.toggle = this.toggle.bind(this)
        this.addBookmark = this.addBookmark.bind(this)
        this.goToBookmark = this.goToBookmark.bind(this)
        this.goBackward = this.goBackward.bind(this)
        this.goForward = this.goForward.bind(this)
        this.onChangeSpeed = this.onChangeSpeed.bind(this)
        this.startReading = this.startReading.bind(this)
        this.stopReading = this.stopReading.bind(this)
    }

    toggle() {
        if (!this.state.passing) {
            this.startReading()
        } else {
            this.stopReading();
        }

        this.setState({passing : !this.state.passing})
    }

    addBookmark() {
        this.props.bookmarkAction(this.props.current)
    }

    goBackward() {
        this.props.backwardAction(this.props.list.length, this.props.current)
    }

    goForward() {
        this.props.forwardAction(this.props.list.length, this.props.current)
    }

    goToBookmark() {
        this.props.goToBookmarkAction(this.props.bookmark)
    }

    onChangeSpeed(event, newValue) {
        // Transforma 0.1 do slider em 1 'palavra'
        this.props.speedAction(Math.floor(newValue * 10))
    }

    startReading() {
        var readingProcess = setInterval(() => {
            //Cheguei à última palavra
            if (this.props.current === this.props.list.length - 1) {
                this.stopReading()
            }
            this.props.passAction(this.props.list.length)
        }, 1000 / this.props.speed)

        this.setState({readingProcess : readingProcess})
    }
    
    stopReading() {
        clearInterval(this.state.readingProcess)
    }

    render() {
        return (
            <Grid>
                <Row around="xs" center='xs'>
                    <Col xs={10} sm={6}>
                        <Row end='xs'>
                            <Col xs={12}>
                            <Badge badgeContent={this.props.speed} primary={true}> Words per second</Badge>
                                <Slider
                                    min={0}
                                    max={1}
                                    defaultValue={this.props.speed / 10}
                                    step={0.1}
                                    onChange={this.onChangeSpeed} />
                            </Col>
                        </Row>
                        <Row style={{marginTop: '20px'}}>
                            <Col xs={12}>
                                <Paper zDepth={3}>
                                    <Row end='xs' style={{
                                        paddingTop : '20px',
                                        paddingRight : '30px'
                                    }}>
                                        <Col xs={3} md={2}>
                                            <BookmarkCollection onTouchTap={this.addBookmark}/>
                                        </Col>
                                        <Col xs={3} md={2}>
                                            <Bookmark onTouchTap={this.goToBookmark} />
                                        </Col>
                                    </Row>
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
                                    <Row style={{
                                        paddingBottom: '20px'
                                    }}>
                                        <Col xs>
                                            <Replay10 onTouchTap={this.goBackward}/>
                                        </Col>
                                        <Col xs>
                                            <Play passing={this.state.passing} onTouchTap={this.toggle} />
                                        </Col>
                                        <Col xs>
                                            <Forward10 onTouchTap={this.goForward} />
                                        </Col>
                                    </Row>
                                </Paper>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookmark: state.bookmark,
        current: state.current,
        list: state.list,
        speed: state.speed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        backwardAction: (current) => dispatch(backwardAction(current)),
        bookmarkAction: (bookmark) => dispatch(bookmarkAction(bookmark)),
        forwardAction: (current) => dispatch(forwardAction(current)),
        goToBookmarkAction: (bookmark) => dispatch(goToBookmarkAction(bookmark)),
        passAction: (length) => dispatch(passAction(length)),
        resetAction: () => dispatch(resetAction()),
        speedAction: (speed) => dispatch(speedAction(speed)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reader)