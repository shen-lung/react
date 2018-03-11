import React, {Component} from 'react';
import PropTypes from 'prop-types';

import  {Link} from 'react-router';

import '../css/Style.css';

class Index extends Component {

    render() {
        return (
            <div>
                <p>
                    <button>
                        <Link to="calculation-redux">Calculation</Link>
                    </button>
                </p>
                <p>
                    <button>
                        <Link to="calculation-react">Calculation with React</Link>
                    </button>
                </p>
                <p>
                    <button>
                        <Link to="tasklist-redux">Task List</Link>
                    </button>
                </p>
                <p>
                    <button>
                        <Link to="tasklist-react">Task List with React</Link>
                    </button>
                </p>
            </div>
        );
    }
}

export default Index;
