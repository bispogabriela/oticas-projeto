export default function ProdutoCard({ produto, onDelete }) {
  return (
    <div className="produto-card">
      <div className="produto-nome">{produto.nome}</div>
      <p>Quantidade: {produto.quantidade}</p>
      <div className="produto-preco">R$ {produto.preco.toFixed(2)}</div>
      <button className="botao-remover" onClick={() => onDelete(produto.id)}>
        Remover
      </button>
    </div>
  );
}
