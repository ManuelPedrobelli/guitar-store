class Guitarra {
    constructor(marca,modelo,precio) {
        this.brand = marca;
        this.model = modelo;
        this.price = precio;
    }
    leer() {
        console.log("Esta guitarra es "+(this.brand)+(this.model)+" y vale: "+(this.price));
    }
}

let guitarra1 = new Guitarra("fender","stratocaster","1500")
guitarra1.leer();