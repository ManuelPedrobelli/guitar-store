const express = require('express')
const app = express()
const port = 3000

products = [
  {
    "name": "Jackson JS Dinky™ JS32Q",
    "brand": "Jackson",
    "model": "JS Dinky™ JS32Q",
    "desc": "Electric Guitar",
    "price": 1300,
    "image": "img/jackson1.png"
  },
  {
    "name": "Jackson MJ Dinky™ DKRP",
    "brand": "Jackson",
    "model": "MJ Dinky™ DKRP",
    "desc": "Electric Guitar",
    "price": 400,
    "image": "img/jackson2.png"
  },
  {
    "name": "Jackson X Dinky™ DK2X",
    "brand": "Jackson",
    "model": "X Dinky™ DK2X",
    "desc": "Electric Guitar",
    "price": 600,
    "image": "img/jackson3.png"
  },
  {
    "name": "Ibanez RGRTB621",
    "brand": "Ibanez",
    "model": "RGRTB621",
    "desc": "Electric Guitar",
    "price": 550,
    "image": "img/ibanez1.png"
  },
  {
    "name": "Ibanez RGRT421",
    "brand": "Ibanez",
    "model": "RGRT421",
    "desc": "Electric Guitar",
    "price": 600,
    "image": "img/ibanez 2.png"
  },
  {
    "name": "Schecter Reaper 6",
    "brand": "Schecter",
    "model": "Reaper 6",
    "desc": "Electric Guitar",
    "price": 1000,
    "image": "img/schecter 1.png"
  },
  {
    "name": "Schecter Hellraiser C-1",
    "brand": "Schecter",
    "model": "Hellraiser C-1",
    "desc": "Electric Guitar",
    "price": 800,
    "image": "img/schecter 2.png"
  },
  {
    "name": "ESP E-II M-II",
    "brand": "ESP",
    "model": "E-II M-II",
    "desc": "Electric Guitar",
    "price": 1200,
    "image": "img/esp3.png"
  },
  {
    "name": "ESP E-II HORIZON NT-II",
    "brand": "ESP",
    "model": "E-II HORIZON NT-II",
    "desc": "Electric Guitar",
    "price": 900,
    "image": "img/esp 1.png"
  },
  {
    "name": "Schecter E-7 Apocalypse",
    "brand": "Schecter",
    "model": "E-7 Apocalypse",
    "desc": "Electric Guitar",
    "price": 1000,
    "image": "img/schecter 3.png"
  },
  {
    "name": "LTD MH-1000 EVERTUNE",
    "brand": "LTD",
    "model": "MH-1000 EVERTUNE",
    "desc": "Electric Guitar",
    "price": 1000,
    "image": "img/esp2.png"
  },
  {
    "name": "Solar S1.6PB-27 Baritone",
    "brand": "Solar",
    "model": "S1.6PB-27 Baritone",
    "desc": "Electric Guitar",
    "price": 1200,
    "image": "img/solar1.png"
  },
  {
    "name": "Solar S1.6AQOB",
    "brand": "Solar",
    "model": "S1.6AQOB",
    "desc": "Electric Guitar",
    "price": 1100,
    "image": "img/solar2.png"
  },
  {
    "name": "Solar E2.6FBB-27",
    "brand": "Solar",
    "model": "E2.6FBB-27",
    "desc": "Electric Guitar",
    "price": 850,
    "image": "img/solar3.png"
  }
]



app.get('/api/products', (req, res) => {
  res.send(products)
})

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`App started on port: ${port}`)
})



  let guitar = {
    name: null,
    brand: null,
    model: null,
    desc: " ",
    price: null,
    imagen: " ",
  }

