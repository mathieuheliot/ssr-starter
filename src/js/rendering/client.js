
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import App from '../app/App';

const appNode = document.getElementById( 'app' );
ReactDOM.render( <Router><App /></Router>, appNode );