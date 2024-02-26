
    function displayProducts(productList) {
        div = document.getElementById('product-list');

        productList.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('producto');
    
            const productLink = document.createElement('a');
            productLink.href = 'producto.html';
    
            const productImage = document.createElement('img');
            productImage.classList.add('producto__imagen');
            productImage.src = product.image; 
            productImage.alt = 'electric-guitar';
    
            const productInfoDiv = document.createElement('div');
            productInfoDiv.classList.add('producto__informacion');
    
            const productName = document.createElement('p');
            productName.classList.add('producto__nombre');
            productName.textContent = `${product.name} ${product.model}`;
    
            const productPrice = document.createElement('p');
            productPrice.classList.add('producto__precio');
            productPrice.textContent = product.price;
    
            // Adjuntar elementos hijo al árbol DOM
            productInfoDiv.appendChild(productName);
            productInfoDiv.appendChild(productPrice);
    
            productLink.appendChild(productImage);
            productLink.appendChild(productInfoDiv);
    
            productDiv.appendChild(productLink);
    
            // Agregar el producto como hijo del contenedor de productos
            div.appendChild(productDiv); // Cambiado de 'div.AppendChild' a 'div.appendChild'
        });

       /* productList.forEach(e => {
            div.AppendChild(
                `<div class="producto">
                <a href="producto.html">
                    <img class="producto__imagen" src="${imagen}" alt="electric-guitar">
                    <div class="producto__informacion">
                        <p class="producto__nombre">${e.name + " " + e.model}</p>
                        <p class="producto__precio">${e.price}</p>
                    </div>
                </a>
            </div> <!-- producto -->`
            )
        });
    } */
}

window.onload = async() => {
    productList = await (await fetch("/api/products")).json();
    console.log(productList);
    displayProducts(productList);
}