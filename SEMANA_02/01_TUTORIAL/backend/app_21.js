const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "ponderada_semana02.db";

app.use(express.json());

/* Definição dos endpoints */

// Retorna a tabela PESSOA
app.get("/tabela_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Pessoas ORDER BY nome COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere pessoas a tabela PESSOA
app.post("/insere_pessoa", (req, res) => {
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

//consulta dados para atualização da tabela PESSOA
app.get("/consultar_tabela_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Pessoas ORDER BY nome COLLATE NOCASE";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela PESSOA
app.post("/atualizar_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE pessoa SET nome = '" +
    req.body.nome +
    "' telefone = '" +
    req.body.telefone +
    "' email ='" +
    req.body.email +
    "' foto_url = '" +
    req.body.foto_url +
    "' cargo_atual = '" + // CONSERTAR AINDA
    req.body.cargo_atual +
    "' WHERE id = 1";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela PESSOA
app.delete("/deletar_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "DELETE FROM PESSOA WHERE id_pessoa = " + req.body.id_pessoa;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela REALIZACAO
app.post("/insere_realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO REALIZACAO (id_realizacao, descricao) VALUES (" +
    req.body.id_realizacao +
    ",'" +
    req.body.descricao +
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

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
