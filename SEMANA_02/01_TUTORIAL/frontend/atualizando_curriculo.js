let estado = true;
let nome;
let email;
let telefone;
function teste() {
  // console.log(estado);
  $.ajax({
    url: "http://localhost:3060/tabela_pessoa",
    type: "GET",
    success: function (response) {
      const info = response;

      info.forEach((pessoa) => {
        if (pessoa.id_pessoa === 4 && estado === true) {
          console.log("id_pessoa = 4 e estado === true");
          nome = pessoa.nome;
          email = pessoa.email;
          telefone = pessoa.telefone;
        }
      });
      if (estado === true) {
        $("#nome").text(nome);
        $("#email").text(email);
        $("#telefone").text(telefone);
        estado = false;
        console.log("entrou no if");
      } else {
        $("#nome").text("John Doe");
        $("#email").text("john.doe@example.com");
        $("#telefone").text("(XX) XXXX-XXXX");
        estado = true;
        console.log("entrou no else");
      }
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  // $("#nome").text(nomeCompleto);
}
