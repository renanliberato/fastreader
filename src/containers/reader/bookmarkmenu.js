import React, { Component } from 'react'

import { connect } from 'react-redux'

import Bookmark from '../../components/button/bookmark'
import BookmarkCollection from '../../components/button/bookmarkcollection'

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
            <div className='row end-xs' style={{
                paddingTop : '20px',
                paddingRight : '30px'
            }}>
                <div className='col-xs-3 col-md-2'>
                    <BookmarkCollection onTouchTap={this.addBookmark}/>
                </div>
                <div className='col-xs-3 col-md-2'>
                    <Bookmark onTouchTap={this.goToBookmark} />
                </div>
            </div>
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