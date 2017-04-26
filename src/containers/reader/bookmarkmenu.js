import React, { Component } from 'react'

import { connect } from 'react-redux'

import Bookmark from '../../components/button/bookmark'
import BookmarkCollection from '../../components/button/bookmarkcollection'

import { bookmarkAction, goToBookmarkAction } from '../../actions/reader/bookmark'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-75537711-6', {
  debug: false,
  titleCase: false,
});

class BookmarkMenu extends Component {

    constructor(props) {
        super(props)
        this.addBookmark = this.addBookmark.bind(this)
        this.goToBookmark = this.goToBookmark.bind(this)
    }

    addBookmark() {
        ReactGA.event({
            category: 'Reader',
            action: 'Add Bookmark',
            label: 'Added a bookmark',
            value: this.props.current
        });

        this.props.bookmarkAction(this.props.current)
    }

    goToBookmark() {
        ReactGA.event({
            category: 'Reader',
            action: 'Go To Bookmark',
            label: 'Went to the bookmark',
            value: this.props.current
        });

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