const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

const products = [
  {
    "ID": 0,
    "name": "Jackson JS Dinky™ JS32Q",
    "brand": "Jackson",
    "model": "JS Dinky™ JS32Q",
    "desc": "Electric Guitar",
    "price": 1300,
    "image": "img/jackson1.png"
  },
  {
    "ID": 1,
    "name": "Jackson MJ Dinky™ DKRP",
    "brand": "Jackson",
    "model": "MJ Dinky™ DKRP",
    "desc": "Electric Guitar",
    "price": 400,
    "image": "img/jackson2.png"
  },
  {
    "ID": 2,
    "name": "Jackson X Dinky™ DK2X",
    "brand": "Jackson",
    "model": "X Dinky™ DK2X",
    "desc": "Electric Guitar",
    "price": 600,
    "image": "img/jackson3.png"
  },
  {
    "ID": 3,
    "name": "Ibanez RGRTB621",
    "brand": "Ibanez",
    "model": "RGRTB621",
    "desc": "Electric Guitar",
    "price": 550,
    "image": "img/ibanez1.png"
  },
  {
    "ID": 4,
    "name": "Ibanez RGRT421",
    "brand": "Ibanez",
    "model": "RGRT421",
    "desc": "Electric Guitar",
    "price": 600,
    "image": "img/ibanez 2.png"
  },
  {
    "ID": 5,
    "name": "Schecter Reaper 6",
    "brand": "Schecter",
    "model": "Reaper 6",
    "desc": "Electric Guitar",
    "price": 1000,
    "image": "img/schecter 1.png"
  },
  {
    "ID": 6,
    "name": "ESP E-II M-II",
    "brand": "ESP",
    "model": "E-II M-II",
    "desc": "Electric Guitar",
    "price": 1200,
    "image": "img/esp3.png"
  },
  {
    "ID": 7,
    "name": "ESP E-II HORIZON NT-II",
    "brand": "ESP",
    "model": "E-II HORIZON NT-II",
    "desc": "Electric Guitar",
    "price": 900,
    "image": "img/esp 1.png"
  },
  {
    "ID": 9,
    "name": "LTD MH-1000 EVERTUNE",
    "brand": "LTD",
    "model": "MH-1000 EVERTUNE",
    "desc": "Electric Guitar",
    "price": 1000,
    "image": "img/esp2.png"
  },
  {
    "ID": 10,
    "name": "Solar S1.6PB-27 Baritone",
    "brand": "Solar",
    "model": "S1.6PB-27 Baritone",
    "desc": "Electric Guitar",
    "price": 1200,
    "image": "img/solar1.png"
  },
  {
    "ID": 11,
    "name": "Solar S1.6AQOB",
    "brand": "Solar",
    "model": "S1.6AQOB",
    "desc": "Electric Guitar",
    "price": 1100,
    "image": "img/solar2.png"
  }
]

router.get('/products', (req, res) => {
  res.json(products);
});

router.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(product => product.ID === parseInt(productId));

  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

// Monta el enrutador en la ruta /api
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);


