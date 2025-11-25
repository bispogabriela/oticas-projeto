-- Todos os produtos
SELECT * FROM Produto;

-- Produtos que estão abaixo do estoque mínimo
SELECT nome, quantidade_estoque, quantidade_minima
FROM Produto
WHERE quantidade_estoque <= quantidade_minima;

-- Consultar movimentações com nome do produto
SELECT 
    M.id_movimentacao,
    M.tipo_movimentacao,
    M.quantidade,
    M.data_movimentacao,
    P.nome AS produto
FROM Movimentacao M
JOIN Produto P ON P.id_produto = M.produto_id;
