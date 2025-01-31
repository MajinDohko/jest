let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

//Creamos la función que nos permita añadir un producto
function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error("Name and price are required");
    }
    if (products.some(product => product.name === name)) {
        throw new Error("Product already exists");
    }
    const product = { id: id++, name, price };
    products.push(product);
    return product;
}

//Creamos funcion que para eliminar producto
function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error("Product not found");
    }
    products.splice(index, 1);
}

//Función que nos devuelva los productos
function getProducts() {
    return products;
}

//Creamos función para obtener un producto
function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error("Product not found");
    }
    return product;
}

function updateProduct(productId, name, price) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error("Product not found");
    }
    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
}

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
