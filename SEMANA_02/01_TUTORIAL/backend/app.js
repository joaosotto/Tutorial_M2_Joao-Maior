const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3060;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "banco_curriculo.db";

app.use(express.static("../frontend"));

app.get("/", (req, res) => {
  res.send("rota errada irmao");
});

app.get("/curriculo", (req, res) => {
  // res.setHeader("Content-Type", "text/html");
  res.sendFile("index.html", { root: "../frontend" });
});

// Retorna a tabela PESSOA
app.get("/tabela_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir solicitações de todos os domínios

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Pessoa ORDER BY nome COLLATE NOCASE";
  console.log(sql);
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere pessoas a tabela PESSOA
app.post("/inserir_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO PESSOA (id_pessoa, nome, idade, telefone, email) VALUES (" +
    req.body.id_pessoa +
    ",'" +
    req.body.nome +
    "'," +
    req.body.idade +
    ",'" +
    req.body.telefone +
    "','" +
    req.body.email +
    "')";
  console.log(sql);
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
