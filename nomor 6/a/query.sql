SELECT cashier.name, product.name, product.name, product.price
FROM product
INNER JOIN cashier ON product.id=cashier.id;