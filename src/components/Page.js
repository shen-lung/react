import React, {Component} from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import '../css/Style.css';


class Page extends Component {
	static propTypes = {
		children: PropTypes.node
	}

    render() {
    	let {children} = this.props;

        return (
            <div className="App">
              	<header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                {children}
                <footer>
                	footer
                </footer>
            </div>
        );
    }
}

export default Page;
