import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
import App from '../components/App.jsx';
import * as routes from './routes';
import calculateTotal from './util/calculateTotal.mjs';

const server = express();
server.use(express.static('dist'));
server.use(cookieSession({
  sameSite: 'lax', secure: false,
  name: 'burger-session', path: '/', secret: 's?liuhasdljfasd' // temporary "random" secret
}))
server.use(cookieParser());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
  if (req.session.ingredients === undefined) {
    req.session.ingredients = {
      toppings: [],
      base: undefined,
      protein: undefined,
      extras: []
    };
  }

  if (req.session.total === undefined) {
    req.session.total = 0;
  } else {
    req.session.total = calculateTotal(req.session.ingredients);
  }

  const initialMarkup = ReactDOMServer.renderToString(<App session={req.session} />);

  res.send(`
  <html>
    <head>
      <title>Build a Burger!</title>
      <script src="/main.js"></script>
      <script src="/bundle.js"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <link href="/styles.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </head>
    <body>
    <div id="mountNode">${initialMarkup}</div>
    </body>
  </html>`)
});

server.post('/select-topping/', async (req, res) =>
  await routes.selectToppingsRoute(req, res)
);

server.post('/select-base/', async (req, res) =>
  await routes.selectBaseRoute(req, res)
);

server.post('/select-protein/', async (req, res) =>
  await routes.selectProteinRoute(req, res)
);

server.post('/remove-item/:type/:index', async (req, res) =>
  await routes.removeToppingRoute(req, res)
);

server.post('/add-extra/', async (req, res) =>
  await routes.addExtraRoute(req, res)
);

server.listen(6789, () => console.log('Server is running'));