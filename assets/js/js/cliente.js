console.log("cat");

let produtos = $(".item-menu");
let listaCompras = $("#itens-tabela");
let totalVenda = $("#total-venda");
var controleItems = {};
var checkHospital = $("#btnradio2");
var checkNormal = $("#btnradio1");
var btnZerar = $("#btn-zerar");

$(document).ready(function () {
  produtos.each((index, item) => {
    let produto = item;
    let jqueryProduto = $(item.querySelector("#nome-item"));
    const nomeProduto = jqueryProduto.attr("custom")
      ? jqueryProduto.attr("custom")
      : item.querySelector("#nome-item").textContent;
    const descProduto = item.querySelector("#desc-produto").textContent;

    const quantidadeInput = $(item.querySelector("#qtd-produto"));
    const btnAumentar = $(item.querySelector("#btnAumentar"));
    const btnDiminuir = $(item.querySelector("#btnDiminuir"));
    const quantidadeProduto = item.querySelector("#qtd-produto").value;

    btnAumentar.click(() => {
      quantidadeInput.val(parseInt(quantidadeInput.val()) + 1);
      atualizaDados(quantidadeInput, index, nomeProduto, 0);
    });

    btnDiminuir.click(() => {
      if (parseInt(quantidadeInput.val()) > 0) {
        quantidadeInput.val(parseInt(quantidadeInput.val()) - 1);
        atualizaDados(quantidadeInput, index, nomeProduto, 0);
      }
    });

    quantidadeInput.on("change input", () => {
      atualizaDados(quantidadeInput, index, nomeProduto, 0);
    });
  });
});

checkHospital.change((e) => {
  if ($(e.target).prop("checked")) {
    /*produtos.each((index, item) =>{
            const produto = $(item);
            let preco = produto.find("#preco-item")
            if (preco.attr("hospital")) {
                preco.text(`$ ${preco.attr("hospital")}`)
            }
        })*/
    document.getElementById("sorvete").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("picole").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cupcake").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("bolo").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("aniverssario").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("maca").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("misto").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("pao").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cafe").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("batata").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("burguer").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("hotdog").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("espetinho").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("coxa").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("file").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("pipoca").style =
      "margin-right: -30px; display: none!important";
    //document.getElementById("donuts").style = "margin-right: -30px; display: none!important";
    //document.getElementById("kitkat").style = "margin-right: -30px; display: none!important";
    //document.getElementById("peq").style = "margin-right: -30px; display: none!important";
    document.getElementById("suco").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("coco").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("agua").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("tonica").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("ursinho").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("rosa").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("buque").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("milkshake").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("misto-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("suco-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cafe-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("sorvete-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("picole-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("file-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("frango-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("espetinho-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("catburguer-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("batata-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("hotdog-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("catcake-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cupcat-d").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("Painter").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("Tunner").style =
      "margin-right: -30px; display: flex!important";
  }
});

checkNormal.change((e) => {
  if ($(e.target).prop("checked")) {
    /*produtos.each((index, item) =>{
            const produto = $(item);
            let preco = produto.find("#preco-item")
                preco.text(`$ ${preco.attr("normal")}`)
        })*/
    document.getElementById("sorvete").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("picole").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cupcake").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("bolo").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("aniverssario").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("maca").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("misto").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("pao").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("cafe").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("batata").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("burguer").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("hotdog").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("espetinho").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("coxa").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("file").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("pipoca").style =
      "margin-right: -30px; display: flex!important";
    //document.getElementById("donuts").style = "margin-right: -30px; display: flex!important";
    //ocument.getElementById("kitkat").style = "margin-right: -30px; display: flex!important";
    //document.getElementById("peq").style = "margin-right: -30px; display: flex!important";
    document.getElementById("suco").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("coco").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("agua").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("tonica").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("ursinho").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("rosa").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("buque").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("milkshake").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("misto-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("suco-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cafe-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("sorvete-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("picole-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("file-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("frango-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("espetinho-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("catburguer-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("batata-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("hotdog-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("catcake-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("cupcat-d").style =
      "margin-right: -30px; display: none!important";
    document.getElementById("Painter").style =
      "margin-right: -30px; display: flex!important";
    document.getElementById("Tunner").style =
      "margin-right: -30px; display: flex!important";
  }
});

function atualizaDados(quantidadeInput, index, nomeProduto, precoItem) {
  if (controleItems[index]) {
    controleItems[index].remove();
    delete controleItems[index];
  }

  const quantidade = parseInt(quantidadeInput.val());
  if (quantidade > 0) {
    let novoItem = itemLista(
      nomeProduto,
      quantidade,
      quantidade * parseInt(precoItem)
    );
    listaCompras.append(novoItem);
    controleItems[index] = novoItem;
  }

  let total = 0;
  Object.values(controleItems).forEach((element) => {
    valor = element.find("#dados-venda-valor").text().replace(/\D/g, "");
    valor = parseInt(valor);
    total = total + valor;
  });
  totalVenda.text(`$ ${total}`);
}

document
  .getElementById("esconder-receita")
  .addEventListener("click", function () {
    var paragrafos = document.getElementsByClassName("desc-produto");

    Array.from(paragrafos).forEach(function (paragrafo) {
      if (paragrafo.style.display === "block") {
        paragrafo.style.display = "none";
      } else {
        paragrafo.style.display = "block";
      }
    });
  });
