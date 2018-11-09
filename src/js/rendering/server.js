
import http from 'axios';
import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from "react-router-dom"

import prestashop from '../api/prestashop';
import Catalog from '../components/catalog/Catalog';

const PORT = 3000

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {

    http.all([
        prestashop.getCategory(22),
        prestashop.getFilters(22)
    ])
        .then(http.spread((category, filters) => {

            const jsx = (
                <Router location={req.url} context={{}}>
                    <Catalog products={category.products} filters={filters} />
                </Router>);

            const reactDom = renderToString(jsx);
            res.writeHead(200, { "Content-type": "text/html" });
            res.end(html(reactDom));
        }))
        .catch(err => {
            console.error(err)
            res.writeHead(500, { "Content-type": "text/html" });
            res.end(htmlError);
        })
})

app.listen(PORT, () => {
    console.log(`\n😎   Server is listening on port ${PORT}\n\n`);
})

function html(reactDom) {
    return htmlTemplate(reactDom)
}

function htmlError() {
    const jsx = (<h1>Ooops, une erreur est survenue</h1>)
    return htmlTemplate(jsx)
}

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Server — SSR</title>
        </head>
        <body>
            <div id="app">
                ${reactDom}
            </div>
            <script async type="text/javascript" src="http://localhost:3001/app.js"></script>
        </body>
        </html>
    `
}