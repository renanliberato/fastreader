import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'

import { connect } from 'react-redux'

import Bookmark from '../../components/button/bookmark';
import BookmarkCollection from '../../components/button/bookmarkcollection';

import { bookmarkAction, goToBookmarkAction } from '../../actions/reader/bookmark'

class BookmarkMenu extends Component {

    constructor(props) {
        super(props)
        this.addBookmark = this.addBookmark.bind(this)
        this.goToBookmark = this.goToBookmark.bind(this)
    }

    addBookmark() {
        this.props.bookmarkAction(this.props.current)
    }

    goToBookmark() {
        this.props.goToBookmarkAction(this.props.bookmark)
    }

    render() {
        return (
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
        )
    }
}

function mapStateToProps(state) {
    return {
        bookmark: state.bookmark,
        current: state.current,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        bookmarkAction: (bookmark) => dispatch(bookmarkAction(bookmark)),
        goToBookmarkAction: (bookmark) => dispatch(goToBookmarkAction(bookmark)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkMenu)