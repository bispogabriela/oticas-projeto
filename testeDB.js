import mysql from "mysql2";

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "oticas_db",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Erro na conexão:", err);
  } else {
    console.log("✅ Conectado com sucesso!");
    db.query("SELECT * FROM produtos", (err, results) => {
      if (err) {
        console.error("❌ Erro ao buscar produtos:", err);
      } else {
        console.log("📦 Produtos:", results);
      }
      db.end();
    });
  }
});
