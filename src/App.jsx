import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    quantidade: "",
    preco: "",
  });

  // 🔹 Buscar produtos
  useEffect(() => {
    fetch("http://localhost:4000/produtos")
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  // 🔹 Adicionar produto
  const adicionarProduto = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/produtos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoProduto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProdutos([...produtos, data]);
        setNovoProduto({ nome: "", quantidade: "", preco: "" });
      });
  };

  // 🔹 Remover produto
  const removerProduto = (id) => {
    fetch(`http://localhost:4000/produtos/${id}`, { method: "DELETE" })
      .then(() => setProdutos(produtos.filter((p) => p.id !== id)));
  };

  return (
    <>
      {/* Cabeçalho com logo */}
      <header className="header">
        <img src="/logo-carol.png" alt="Óticas Carol" className="logo" />
      </header>

      {/* Conteúdo principal */}
      <div className="container">
        <h2>Controle de Estoque</h2>

        <form className="formulario" onSubmit={adicionarProduto}>
          <input
            type="text"
            placeholder="Nome do produto"
            value={novoProduto.nome}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, nome: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Qtd"
            value={novoProduto.quantidade}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, quantidade: e.target.value })
            }
          />
          <input
            type="number"
            step="0.01"
            placeholder="Preço"
            value={novoProduto.preco}
            onChange={(e) =>
              setNovoProduto({ ...novoProduto, preco: e.target.value })
            }
          />
          <button type="submit">Adicionar</button>
        </form>

        {produtos.map((p) => (
          <div key={p.id} className="produto-card">
            <div className="produto-nome">{p.nome}</div>
            <div>Quantidade: {p.quantidade}</div>
            <div className="produto-preco">R$ {p.preco}</div>
            <button
              className="botao-remover"
              onClick={() => removerProduto(p.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <footer className="footer">
        © 2025 Óticas Carol — Todos os direitos reservados.
      </footer>
    </>
  );
}

export default App;
