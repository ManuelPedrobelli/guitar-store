const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors');
app.use(cors({
  origin: 'https://65e33d7bdd2735caefe1874f--metalguitars-mp.netlify.app/productlist', // Solo permitir solicitudes desde este dominio
  methods: ['GET', 'POST'], // Solo permitir solicitudes GET y POST
  allowedHeaders: ['Content-Type', 'Authorization'], // Solo permitir estos encabezados en las solicitudes
}));
  products = [
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

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`App started on port: ${port}`)
})

app.get('/api/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(product => product.ID === parseInt(productId));

  if (product) {
      res.send(product);
  } else {
      res.status(404).send('Producto no encontrado');
  }
});



