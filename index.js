let um = $("div");
let link = {};
let imgs = $("#imagem");
let texto = $("#texto");
let ddata = $("data");
let botao = $("#bts");
botao.on("click", () => {
tempo()
})
function tempo() {
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=rI2vDTkIPPaQ9ebtv7tsMVdDXgVGdK5tQIX2AnBr&date=${data.value}`,
      success(resposta) {
        imgs.css("background-image", `url(${resposta.url})`);
        texto[0].innerHTML = resposta.explanation;
        console.log(resposta);
      },
    });
  }
tempo()
