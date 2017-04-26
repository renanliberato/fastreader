import React, { Component } from 'react'
import { connect } from 'react-redux'
import Badge from 'material-ui/Badge'
import Paper from 'material-ui/Paper'
import Slider from 'material-ui/Slider'

import BookmarkMenu from './bookmarkmenu'
import Footer from '../../components/footer';
import Importer from './importer'
import PlayMenu from './playmenu'
import ReaderBox from './readerbox'

import { passAction } from '../../actions/reader/pass'
import { speedAction } from '../../actions/reader/speed'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-75537711-6', {
  debug: false,
  titleCase: false,
});

class Reader extends Component {

    constructor(props) {
        super(props)
        this.state = {passing : false, readingProcess : null}
        this.toggle = this.toggle.bind(this)
        this.onChangeSpeed = this.onChangeSpeed.bind(this)
        this.startReading = this.startReading.bind(this)
        this.stopReading = this.stopReading.bind(this)
    }

    componentWillMount() {
        ReactGA.pageview('/');
    }

    toggle() {
        if (!this.state.passing) {
            
            this.startReading()
        } else {
            
            this.stopReading()
        }

        this.setState({passing : !this.state.passing})
    }

    onChangeSpeed(event, newValue) {
        ReactGA.event({
            category: 'Reader',
            action: 'Changed speed',
            label: 'Started reading',
            value: newValue * 10,
        });
        // Transforma 0.1 do slider em 1 'palavra'
        this.props.speedAction(Math.floor(newValue * 10))
    }

    startReading() {
        ReactGA.event({
            category: 'Reader',
            action: 'Start Reading',
            label: 'Started reading',
            value: this.props.current,
        });
        
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
        ReactGA.event({
            category: 'Reader',
            action: 'Stop Reading',
            label: 'Stopped reading',
            value: this.props.current,
        });

        clearInterval(this.state.readingProcess)
    }

    render() {
        return (
            <div>
                <div className='row center-xs'>
                    <div className='col-xs-10 col-sm-6'>
                        <div className='end-xs'>
                            <div className='col-xs-12'>
                            <Badge badgeContent={this.props.speed} primary={true}> Words per second</Badge>
                                <Slider
                                    min={0}
                                    max={1}
                                    value={this.props.speed / 10}
                                    step={0.1}
                                    onChange={this.onChangeSpeed} />
                            </div>
                        </div>
                        <div className='row end-xs'>
                            <div className='col-xs-12'>
                                <Importer />
                            </div>
                        </div>
                        <BookmarkMenu />
                        <div className='row' style={{marginTop: '20px'}}>
                            <div className='col-xs-12'>
                                <Paper zDepth={3}>
                                    <ReaderBox toggle={this.toggle} />
                                    <PlayMenu passing={this.state.passing} toggle={this.toggle} />
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        current: state.current,
        list: state.list,
        speed: state.speed,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        passAction: (length) => dispatch(passAction(length)),
        speedAction: (speed) => dispatch(speedAction(speed)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reader)