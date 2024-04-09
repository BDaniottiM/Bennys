//let produtos = $('.item-menu');
let inputClient = $("#nome-cliente");
let inputFuncionario = $("#nome-funcionario");
let dadosVendaCliente = $("#dados-nome-cliente");
let dadosVendaFuncionario = $("#dados-nome-funcionario");
let dadosHoraVenda = $("#dados-hora-venda");
//let listaCompras = $('#itens-tabela');
//let totalVenda = $("#total-venda");
var btnGerar = $("#btn-gerar");
var btnCopiar = $("#btn-copiar");
var controleItems = {};
var nomeCliente = $("#nome-cliente");
var nomeFuncionario = $("#nome-funcionario");
var notaFiscal = $("#nota-fiscal");
var btnZerar = $("#btn-zerar");
var checkHospital = $("#btnradio2");
var checkNormal = $("#btnradio1");
var checkDiabetico = $("#btnradio3");
var checkPromoDiabetico = $("#btnradio4");
var alertaErro = $("#alertaErro");
alertaErro.css("display", "none");

$(document).ready(function () {
  produtos.each((index, item) => {
    let produto = item;
    let jqueryProduto = $(item.querySelector("#nome-item"));
    const nomeProduto = jqueryProduto.attr("custom")
      ? jqueryProduto.attr("custom")
      : item.querySelector("#nome-item").textContent;
    const descProduto = item.querySelector("#desc-produto").textContent;
    const quantidadeInput = $(item.querySelector("#qtd-produto"));
    const quantidadeProduto = item.querySelector("#qtd-produto").value;
    const btnAumentar = $(item.querySelector("#btnAumentar"));
    const btnDiminuir = $(item.querySelector("#btnDiminuir"));

    btnAumentar.click(() => {
      quantidadeInput.val(parseInt(quantidadeInput.val() - 1) + 1);
      atualizaDados(quantidadeInput, index, nomeProduto, 0);
    });

    btnDiminuir.click(() => {
      quantidadeInput.val(parseInt(quantidadeInput.val() - 1) + 1);
      atualizaDados(quantidadeInput, index, nomeProduto, 0);
    });

    btnCopiar.click(() => {
      copyToClipboard(notaFiscal.val());
      btnCopiar.css("background", "var(--bs-teal)");
      btnCopiar.text("Copiado!");
      setTimeout(() => {
        btnCopiar.css("background", "var(--bs-pink)");
        btnCopiar.text("Copiar");
      }, 1000);
    });

    quantidadeInput.on("input", () => {
      if (quantidadeInput.val() <= 0) {
        quantidadeInput.val(0);
      }
      if (controleItems[index]) {
        controleItems[index].remove();
        delete controleItems[index];
      }
      let novoItem = itemLista(
        nomeProduto,
        quantidadeInput.val(),
        quantidadeInput.val() * parseInt(0)
      );
      listaCompras.append(novoItem);
      controleItems[index] = novoItem;
      var map = new Map(Object.entries(controleItems));
      let total = 0;
      map.forEach((element) => {
        valor = element.find("#dados-venda-valor").text().replace(/\D/g, "");
        valor = parseInt(valor);
        total = total + valor;
      });
      totalVenda.text(`$ ${total}`);
    });
  });
});

checkHospital.change((e) => {
  if ($(e.target).prop("checked")) {
    produtos.each((index, item) => {
      const produto = $(item);
      let preco = produto.find("#preco-item");
      if (preco.attr("hospital")) {
        preco.text(`$ ${preco.attr("hospital")}`);
      }
    });
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
    //document.getElementById("kitkat").style = "margin-right: -30px; display: flex!important";
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

checkNormal.change((e) => {
  if ($(e.target).prop("checked")) {
    produtos.each((index, item) => {
      const produto = $(item);
      let preco = produto.find("#preco-item");
      preco.text(`$ ${preco.attr("normal")}`);
    });
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
    //document.getElementById("kitkat").style = "margin-right: -30px; display: flex!important";
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

checkDiabetico.change((e) => {
  if ($(e.target).prop("checked")) {
    produtos.each((index, item) => {
      const produto = $(item);
      let preco = produto.find("#preco-item");
      preco.text(`$ ${preco.attr("normal")}`);
    });
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

checkPromoDiabetico.change((e) => {
  if ($(e.target).prop("checked")) {
    produtos.each((index, item) => {
      const produto = $(item);
      let preco = produto.find("#preco-item");
      if (preco.attr("hospital")) {
        preco.text(`$ ${preco.attr("hospital")}`);
      }
    });
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

inputClient.on("input", () => {
  dadosVendaCliente.text(inputClient.val());
});

inputFuncionario.on("input", () => {
  dadosVendaFuncionario.text(inputFuncionario.val());
});

setInterval(() => {
  dadosHoraVenda.text(window.moment().format("DD/MM/YYYY HH:mm:ss"));
}, 1000);

function atualizaDados(quantidadeInput, index, nomeProduto, precoItem) {
  if (controleItems[index]) {
    controleItems[index].remove();
    delete controleItems[index];
  }

  if (parseInt(quantidadeInput.val()) > 0) {
    let novoItem = itemLista(
      nomeProduto,
      quantidadeInput.val(),
      quantidadeInput.val() * parseInt(precoItem)
    );
    listaCompras.append(novoItem);
    controleItems[index] = novoItem;
  }

  var map = new Map(Object.entries(controleItems));
  let total = 0;
  map.forEach((element) => {
    valor = element.find("#dados-venda-valor").text().replace(/\D/g, "");
    valor = parseInt(valor);
    total = total + valor;
  });
  totalVenda.text(`$ ${total}`);
}

btnZerar.on("click", () => {
  produtos.each((index, item) => {
    const quantidadeInput = $(item.querySelector("#qtd-produto"));
    quantidadeInput.val(0);
  });
  listaCompras.empty();
  inputClient.val("");
  inputFuncionario.val("");
  dadosVendaCliente.text("");
  dadosVendaFuncionario.text("");
  totalVenda.text("$0");
  controleItems = {};
  notaFiscal.val("");
  alertaErro.css("display", "none");
});

btnGerar.on("click", (e) => {
  if (inputClient.val() == "" || inputFuncionario.val() == "") {
    alertaErro.css("display", "block");
    setTimeout(() => {
      alertaErro.hide();
    }, 10000);
  } else {
    /*
        if (e.ctrlKey) {
            console.log("control");
            let textoDiscord = `--------- CUPOM FISCAL ---------\n`
        }
        */
    let itensTabela = $(".linha-tabela");
    let itens = [];
    itensTabela.each((index, element) => {
      element = $(element);
      itens.push({
        nome: element.find("#dados-venda-nome").text(),
      });
    });
    if (itens.length == 0) {
      return;
    }
    let textoNota = gerarTextoNota(
      nomeCliente.val(),
      nomeFuncionario.val(),
      totalVenda.text(),
      itens
    );
    notaFiscal.val(textoNota);
  }
});

function gerarTextoNota(
  cliente,
  funcionario,
  total = 0,
  itens = [
    { nome: "teste", quantidade: "3", valor: "300" },
    { nome: "teste2", quantidade: "4", valor: "500" },
    { nome: "teste3", quantidade: "4", valor: "500" },
  ]
) {
  let textoBase = `--------- CUPOM FISCAL ---------\n
    ----- UwU Cat Café -----
    \n  Funcionário: ${funcionario}
    \n  Cliente: ${cliente}
    \n  Data: ${window.moment().format("DD/MM/YYYY HH:mm")}
    \n\n-------- ITENS COMPRADOS --------
${itens
  .map((item) => {
    return `${item.quantidade}x ${item.nome} \n${item.valor}\n`;
  })
  .join("\n")}
  
  Total do pedido: ${total}`;

  return textoBase;
}

function copyToClipboard(text) {
  var dummy = document.createElement("textarea");
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
var entregaCheckbox = $("#entrega");

entregaCheckbox.change(() => {
  if (entregaCheckbox.prop("checked")) {
    var totalAtual = parseInt(totalVenda.text().replace(/\D/g, ""));
    totalVenda.text("$" + (totalAtual + 200));
  } else {
    var totalAtual = parseInt(totalVenda.text().replace(/\D/g, ""));
    totalVenda.text("$" + (totalAtual - 200));
  }
});
