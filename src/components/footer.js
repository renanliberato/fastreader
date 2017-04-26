import React, { Component } from 'react';

import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='row center-xs' style={{marginTop: '100px'}}>
                <div className="col-md-12">
                    <span>App in development by Renan Liberato</span>
				</div>
                <div className="col-md-12"  style={{marginTop: '10px'}}>
                    <ul className="social-network social-circle">
                        <li><a target="_blank" href="https://github.com/renanliberato" className="icoGithub" title="Github"><i className="fa fa-github"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/renanlibegato" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    </ul>				
				</div>

            </div>
        )
    }
}