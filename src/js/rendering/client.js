
import React from "react";
import ReactDOM from "react-dom";
import Catalog from "./../components/Catalog";

const app = document.getElementById( "app" );
ReactDOM.hydrate( <Catalog />, app );