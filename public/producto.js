window.onload = async () => {
    try {
        const productId = localStorage.getItem('productId');
        if (!productId) {
            console.error('ID de producto no encontrado en localStorage');
            return;
        }

        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
            console.error('Error al obtener los detalles del producto');
            return;
        }

        const product = await response.json();

        // Obtener el elemento donde se mostrarán los detalles del producto
        const productDetailsContainer = document.getElementById('product-details');
        const productContainer = document.getElementById('product');

        // Crear y configurar la imagen del producto
        const productImageElement = document.getElementById('product-image');
        productImageElement.src = product.image;
        productImageElement.alt = product.name;

        // Crear elementos HTML para mostrar otros detalles del producto
        const productNameElement = document.createElement('h2');
        productNameElement.textContent = product.name;

        const productBrandElement = document.createElement('p');
        productBrandElement.textContent = 'Brand: ' + product.brand;

        const productModelElement = document.createElement('p');
        productModelElement.textContent = 'Model: ' + product.model;

        const productDescElement = document.createElement('p');
        productDescElement.textContent = 'Desc: ' + product.desc;

        const productPriceElement = document.createElement('p');
        productPriceElement.textContent = 'Price: $' + product.price;

        // Limpiar cualquier contenido anterior en el contenedor
        productDetailsContainer.innerHTML = '';

        // Agregar los elementos al contenedor
        productDetailsContainer.appendChild(productImageElement);
        productDetailsContainer.appendChild(productNameElement);
        productDetailsContainer.appendChild(productBrandElement);
        productDetailsContainer.appendChild(productModelElement);
        productDetailsContainer.appendChild(productDescElement);
        productDetailsContainer.appendChild(productPriceElement);
        productContainer.appendChild(productImageElement);
        productContainer.appendChild(productDetailsContainer);

    } catch (error) {
        console.error('Error al cargar la página:', error);
    }
}