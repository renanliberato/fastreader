import React, { Component } from 'react'
import { connect } from 'react-redux'
import { passAction } from '../../actions/reader/pass'
import { bookmarkAction, goToBookmarkAction } from '../../actions/reader/bookmark'
import { resetAction } from '../../actions/reader/reset'
import { backwardAction } from '../../actions/reader/backward'
import { forwardAction } from '../../actions/reader/forward'
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

class Reader extends Component {

    constructor(props) {
        super(props)
        this.state = {passing : true}
        this.toggle = this.toggle.bind(this)
        this.addBookmark = this.addBookmark.bind(this)
        this.goToBookmark = this.goToBookmark.bind(this)
        this.goBackward = this.goBackward.bind(this)
        this.goForward = this.goForward.bind(this)
    }

    toggle() {
        this.setState({passing : !this.state.passing})
    }

    addBookmark() {
        this.props.bookmarkAction(this.props.current);
    }

    goBackward() {
        this.props.backwardAction(this.props.list.length, this.props.current);
    }

    goForward() {
        this.props.forwardAction(this.props.list.length, this.props.current);
    }

    goToBookmark() {
        this.props.goToBookmarkAction(this.props.bookmark);
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.passing) {
                this.props.passAction(this.props.list.length)
            }
        }, 200)
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row around="xs" center='xs'>
                            <Col xs={10} sm={6}>
                                <RaisedButton primary onClick={this.addBookmark}>Bookmark</RaisedButton>
                                <RaisedButton onClick={this.goToBookmark}>Go to bookmark</RaisedButton>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row around="xs" center='xs'>
                            <Col xs={10} sm={6}>
                                <RaisedButton onClick={this.goBackward}>&lt;</RaisedButton>
                                <RaisedButton secondary onClick={this.toggle}>|| |></RaisedButton>
                                <RaisedButton onClick={this.goForward}>&gt;</RaisedButton>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row center='xs'>
                            <Col xs={10} sm={6}>
                                <Paper zDepth={3}>
                                    <Row center='xs' middle='xs' style={{height: '400px'}}>
                                        <Col xs={12}>
                                            {this.props.list[this.props.current]}
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
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        goToBookmarkAction: (bookmark) => dispatch(goToBookmarkAction(bookmark)),
        bookmarkAction: (bookmark) => dispatch(bookmarkAction(bookmark)),
        passAction: (length) => dispatch(passAction(length)),
        resetAction: () => dispatch(resetAction()),
        backwardAction: (current) => dispatch(backwardAction(current)),
        forwardAction: (current) => dispatch(forwardAction(current)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reader)