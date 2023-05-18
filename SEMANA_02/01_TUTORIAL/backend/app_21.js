const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "banco_curriculo.db";

app.use(express.json());

/* Definição dos endpoints */

// Retorna a tabela PESSOA
app.get("/tabela_pessoa", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

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

// Retorna a tabela REALIZACAO
app.get("/tabela_realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Realizacao";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela REALIZACAO
app.post("/inserir_realizacao", (req, res) => {
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

//consulta dados para atualização da tabela REALIZACAO
app.get("/consultar_tabela_realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Realizacao ";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela REALIZACAO
app.post("/atualizar_realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE realizacao SET id_realizacao = " +
    req.body.id_realizacao +
    ", data = '" +
    req.body.data +
    "', descricao = '" +
    req.body.descricao +
    "' WHERE id_pessoa= 1";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela REALIZACAO
app.delete("/deletar_realizacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "DELETE FROM REALIZACAO WHERE id_realizacao = " + req.body.id_realizacao;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna a tabela HABILIDADE
app.get("/tabela_habilidade", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Habilidade";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela REALIZACAO
app.post("/inserir_habilidade", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO HABILIDADE (id_habilidade, nota_illustrator, nota_photoshop, nota_coredraw, nota_dreamweaver, nota_htmlcss) VALUES (" +
    req.body.id_habilidade +
    "," +
    req.body.nota_illustrator +
    "," +
    req.body.nota_photoshop +
    "," +
    req.body.nota_coredraw +
    "," +
    req.body.nota_dreamweaver +
    "," +
    req.body.nota_htmlcss +
    ")";
  console.log(sql);
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//consulta dados para atualização da tabela HABILIDADE
app.get("/consultar_tabela_hablidade", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM habilidade ";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela REALIZACAO
app.post("/atualizar_habilidade", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE realizacao SET id_habilidade = " +
    req.body.id_habilidade +
    ", nota_illustrator = " +
    req.body.nota_illustrator +
    ", nota_photoshop = " +
    req.body.nota_photoshop +
    ", nota_coredraw= " +
    req.body.nota_coredraw +
    ", nota_dreamweaver = " +
    req.body.nota_nota_dreamweaver +
    ", nota_htmlcss = " +
    req.body.nota_htmlcss +
    " WHERE id_pessoa=" +
    req.body.id_pessoa;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela HABILIDADE
app.delete("/deletar_habilidade", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "DELETE FROM HABILIDADE WHERE id_habilidade = " + req.body.id_habilidade;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna a tabela FORMACAO
app.get("/tabela_formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM formacao";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela FORMACAO
app.post("/inserir_formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO FORMACAO (id_formacao, curso, data_inicio, data_fim, instituicao) VALUES ('" +
    req.body.id_formacao +
    "','" +
    req.body.curso +
    "','" +
    req.body.data_inicio +
    "','" +
    req.body.data_fim +
    "','" +
    req.body.instituicao +
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

//consulta dados para atualização da tabela FORMACAO
app.get("/consultar_tabela_formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM FORMACAO ";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela FORMACAO
app.post("/atualizar_formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE formacao SET id_formacao = " +
    req.body.id_formacao +
    ", curso = " +
    req.body.curso +
    ", data_inicio = " +
    req.body.data_inicio +
    ", data_fim = " +
    req.body.data_fim +
    ", instituicao = " +
    req.body.instituicao +
    " WHERE id_pessoa =" +
    req.body.id_pessoa;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela FORMACAO
app.delete("/deletar_formacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "DELETE FROM FORMACAO WHERE id_formacao = " + req.body.id_formacao;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna a tabela EXPERIENCIA
app.get("/tabela_experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM experiencia";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela FORMACAO
app.post("/inserir_experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO EXPERIENCIA (id_experiencia, cargo, data_inicio, data_fim, instituicao) VALUES (" +
    req.body.id_formacao +
    ",'" +
    req.body.cargo +
    "','" +
    req.body.data_inicio +
    "','" +
    req.body.data_fim +
    "','" +
    req.body.instituicao +
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

//consulta dados para atualização da tabela EXPERIENCIA
app.get("/consultar_tabela_experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM EXPERIENCIA ";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela EXPERIENCIA
app.post("/atualizar_experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE experiencia SET id_experiencia = " +
    req.body.id_experiencia +
    ", cargo = " +
    req.body.cargo +
    ", data_inicio = " +
    req.body.data_inicio +
    ", data_fim = " +
    req.body.data_fim +
    ", instituicao = " +
    req.body.instituicao +
    " WHERE id_pessoa =" +
    req.body.id_pessoa;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela EXPERIENCIA
app.delete("/deletar_experiencia", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "DELETE FROM EXPERIENCIA WHERE id_experiencia = " + req.body.id_experiencia;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Retorna a tabela CARACTERISTICA
app.get("/tabela_caracteristica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM caracteristica";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere na tabela CARACTERISTICA
app.post("/inserir_caracteristica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "INSERT INTO CARACTERISTICA (id_caracteristica, nota_autodidata, nota_colaborador, nota_proativo, nota_transparente, nota_comprometido) VALUES (" +
    req.body.id_caracteristica +
    "," +
    req.body.nota_autodidata +
    "," +
    req.body.nota_colaborador +
    "," +
    req.body.nota_proativo +
    "," +
    req.body.nota_transparente +
    "," +
    req.body.nota_comprometido +
    ")";
  console.log(sql);
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//consulta dados para atualização da tabela CARACTERISTICA
app.get("/consultar_tabela_caracteristica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM CARACTERISTICA ";
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//insere os dados atualizados da tabela EXPERIENCIA
app.post("/atualizar_caracteristica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "UPDATE CARACTERISTICA SET id_caracteristica = " +
    req.body.id_caracteristica +
    ", nota_autodidata = " +
    req.body.nota_autodidata +
    ", nota_colaborador = " +
    req.body.nota_colaborador +
    ", nota_proativo = " +
    req.body.nota_proativo +
    ", nota_transparente = " +
    req.body.nota_tranparente +
    " WHERE id_pessoa =" +
    req.body.id_pessoa;
  db.run(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

//deleta informações da tabela CARACTERISTICA
app.delete("/deletar_caracteristica", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql =
    "DELETE FROM CARACTERISTICA WHERE id_caracteristica = " +
    req.body.id_caracteristica;
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
