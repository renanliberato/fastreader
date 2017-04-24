import React, { Component } from 'react'

import ContentAdd from 'material-ui/svg-icons/content/add'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import TextField from 'material-ui/TextField'

import { connect } from 'react-redux'

import { bookmarkAction } from '../../actions/reader/bookmark'
import { listWordAction } from '../../actions/reader/list'
import { resetAction } from '../../actions/reader/reset'

class Importer extends Component {

    constructor(props) {
        super(props)
        this.state = {open : false, preparedList : ''}
        this.handleClear = this.handleClear.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOpen = this.handleOpen.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOpen() {
        this.setState({
            open: true,
            preparedList : this.props.list.join(' ')
        })
    }

    handleClear() {
        this.setState({
            preparedList : '',
        })
    }

    handleClose() {
        this.setState({open: false})
    }

    handleSubmit() {
        this.props.listWordAction(this.state.preparedList.split(' '))
        this.handleClose()
    }

    render() {
        const actions = [
            <FlatButton
                label="Clear"
                primary={true}
                onTouchTap={this.handleClear}
            />,
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
            />,
        ]

        return (
            <FloatingActionButton onTouchTap={this.handleOpen}>
                <ContentAdd />
                <Dialog
                    title="Change reading text"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <TextField 
                        id="preparedListField"
                        fullWidth={true}
                        multiLine={true}
                        value={this.state.preparedList}
                        onChange={(e) => this.setState({preparedList : e.target.value})}
                    />
                    </Dialog>
            </FloatingActionButton>
        )
    }
}

function mapStateToProps(state) {
    return {
        list : state.list
    }
}

function mapDispatchToProps(dispatch) {
    return {
        listWordAction : (list) => {
            dispatch(listWordAction(list))
            dispatch(resetAction())
            dispatch(bookmarkAction(0))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Importer)