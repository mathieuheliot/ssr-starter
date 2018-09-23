import express from 'express';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import Catalog from '../components/catalog/Catalog';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (req, res) => {
    const jsx = (<Catalog />);
    const reactDom = renderToString(jsx);
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(htmlTemplate(reactDom));
})

app.listen(3000);

function htmlTemplate(reactDom) {
    return `${reactDom}`;
}