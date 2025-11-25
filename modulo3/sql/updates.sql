-- Entrada de estoque
UPDATE Produto
SET quantidade_estoque = quantidade_estoque + 10
WHERE id_produto = 1;

-- Alterar preço
UPDATE Produto
SET preco_unitario = 150.00
WHERE id_produto = 1;

-- Alterar categoria
UPDATE Produto
SET categoria_id = 2
WHERE id_produto = 1;
