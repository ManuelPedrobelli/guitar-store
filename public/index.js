function displayProducts(productList) {
    const div = document.getElementById('product-list');

    productList.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('producto');

        productDiv.setAttribute('data-id', product.ID); // Agrega el ID del producto como atributo de datos

        const productImage = document.createElement('img');
        productImage.classList.add('producto__imagen');
        productImage.src = product.image;
        productImage.alt = 'electric-guitar';

        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('producto__informacion');

        const productName = document.createElement('p');
        productName.classList.add('producto__nombre');
        productName.textContent = `${product.name}`;

        const productPrice = document.createElement('p');
        productPrice.classList.add('producto__precio');
        productPrice.textContent = ('$ ' + product.price);

        // Adjuntar elementos hijo al árbol DOM
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productInfoDiv);


        // Agregar el producto como hijo del contenedor de productos
        div.appendChild(productDiv);
    });
}



        window.onload = async () => {
            try {
                // Obtener la lista de productos y mostrarlos
                const productListResponse = await fetch("/api/products");
                const productList = await productListResponse.json();
                console.log("Respuesta de la lista de productos:", productList); // Agregar este console.log para depurar la respuesta
        
                displayProducts(productList);

        // Seleccionar todos los elementos con la clase '.producto'
        const productos = document.querySelectorAll('.producto');

        productos.forEach(producto => {
            producto.addEventListener('click', () => {
                const productId = producto.getAttribute('data-id'); // Obtener el ID del producto del atributo de datos
                localStorage.setItem('productId', productId); // Almacena el ID del producto en el localStorage
                window.location.href = 'producto.html'; // Redirige a la página de detalles del producto
            });
        });
    } catch (error) {
        console.error('Error al cargar la página:', error);
    }
}
