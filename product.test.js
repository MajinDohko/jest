const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

describe('Product Management', () => {
    beforeEach(() => {
        resetProducts();
    });

    test('should add a product successfully', () => {
        const product = addProduct('Kindle', 120);
        expect(product).toEqual({ id: 0, name: 'Kindle', price: 120 });
        expect(getProducts()).toHaveLength(1);
    });

    test('should throw an error when adding a product with missing name or price', () => {
        expect(() => addProduct('', 290)).toThrow("Name and price are required");
        expect(() => addProduct('Switch')).toThrow("Name and price are required");
    });

    test('should throw an error when adding a duplicate product', () => {
        addProduct('Smartwatch', 60);
        expect(() => addProduct('Smartwatch', 60)).toThrow("Product already exists");
    });

    test('should remove a product successfully', () => {
        const product = addProduct('Monitor', 250);
        removeProduct(product.id);
        expect(getProducts()).toHaveLength(0);
    });

    test('should throw an error when removing a non-existent product', () => {
        expect(() => removeProduct(50)).toThrow("Product not found");
    });

    test('should retrieve a product successfully', () => {
        const product = addProduct('Teclado', 125);
        expect(getProduct(product.id)).toEqual(product);
    });

    test('should throw an error when retrieving a non-existent product', () => {
        expect(() => getProduct(50)).toThrow("Product not found");
    });

    test('should update a product successfully', () => {
        const product = addProduct('Auriculares', 25);
        updateProduct(product.id, 'Auriculares inalámbricos', 50);
        expect(getProduct(product.id)).toEqual({ id: product.id, name: 'Auriculares inalámbricos', price: 50 });
    });

    test('should throw an error when updating a non-existent product', () => {
        expect(() => updateProduct(50, 'Nuevo Producto', 100)).toThrow("Product not found");
    });
});

