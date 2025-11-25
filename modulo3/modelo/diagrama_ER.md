```mermaid
erDiagram

    CATEGORIA {
        int id_categoria PK
        string nome_categoria
    }

    PRODUTO {
        int id_produto PK
        string codigo_produto
        string nome
        decimal preco_unitario
        int quantidade_estoque
        int quantidade_minima
        int categoria_id FK
    }

    MOVIMENTACAO {
        int id_movimentacao PK
        int produto_id FK
        string tipo_movimentacao
        int quantidade
        datetime data_movimentacao
    }

    CATEGORIA ||--o{ PRODUTO : "possui"
    PRODUTO ||--o{ MOVIMENTACAO : "registra"
