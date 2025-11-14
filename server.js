import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔹 Conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,      
  user: process.env.DB_USER,      
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Verifica conexão
db.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar no MySQL:", err);
    return;
  }
  console.log("✅ Conectado ao banco MySQL com sucesso!");
});

// 🔹 LISTAR produtos
app.get("/produtos", (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// 🔹 ADICIONAR produto
app.post("/produtos", (req, res) => {
  const { nome, quantidade, preco } = req.body;

  db.query(
    "INSERT INTO produtos (nome, quantidade, preco) VALUES (?, ?, ?)",
    [nome, quantidade, preco],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      res.json({
        id: result.insertId,
        nome,
        quantidade,
        preco
      });
    }
  );
});

// 🔹 DELETAR produto
app.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM produtos WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Produto removido" });
    }
  );
});

// 🔹 INICIAR servidor
app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
});
