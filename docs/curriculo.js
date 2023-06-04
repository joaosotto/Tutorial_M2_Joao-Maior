let stateHeader = true;
function mudar_background_header() {
  if (stateHeader === true) {
    $("header").css("backgroundColor", "#111111");
    $("#btn_header").text("Voltar a cor original");
    stateHeader = false;
  } else {
    $("header").css("backgroundColor", "#06153c");
    $("#btn_header").text("Trocar de cor");
    stateHeader = true;
  }
  $("header").css("color", "#ffffff");
}

let stateMain = true;
function mudar_background_main() {
  if (stateMain === true) {
    $("#main_content").css("backgroundColor", "#111111");
    $("#btn_main").text("Voltar a cor original");
    stateMain = false;
  } else {
    $("#main_content").css("backgroundColor", "#445fa4");
    $("#btn_main").text("Trocar de cor");
    stateMain = true;
  }
  $("#main_content").css("color", "#ffffff");
}
