import { useState } from "react";

export default function FormularioProduto({ onAdd }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !quantidade || !preco) return alert("Preencha todos os campos!");
    onAdd({ nome, quantidade: Number(quantidade), preco: parseFloat(preco) });
    setNome("");
    setQuantidade("");
    setPreco("");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Nome do produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
