const API_URL = "http://localhost:4000";

export async function buscarProdutos() {
  const resposta = await fetch(`${API_URL}/produtos`);
  if (!resposta.ok) throw new Error("Erro ao buscar produtos");
  return resposta.json();
}

export async function adicionarProduto(produto) {
  const resposta = await fetch(`${API_URL}/produtos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(produto),
  });
  if (!resposta.ok) throw new Error("Erro ao adicionar produto");
  return resposta.json();
}

export async function removerProduto(id) {
  const resposta = await fetch(`${API_URL}/produtos/${id}`, { method: "DELETE" });
  if (!resposta.ok) throw new Error("Erro ao remover produto");
  return resposta.json();
}
