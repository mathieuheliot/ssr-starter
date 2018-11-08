
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import Catalog from "../components/catalog/Catalog";

const app = document.getElementById( "app" );
ReactDOM.render( <Router><Catalog /></Router>, app );