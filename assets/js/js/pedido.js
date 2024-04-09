var btnPedido = $("#btnPedido");
var nomePedido = $("#nome-pedido");
var telefonePedido = $("#telefone-pedido");
var enderecoPedido = $("#end-pedido");
var alertaSucesso = $("#alertaSucesso");
alertaSucesso.css("display", "none");
var observacoes = $("#obs");
alertaSucesso.css("display", "none");

btnPedido.click(() => {
  var linhaTabela = document.querySelectorAll("#linha-tabela");
  let itens = [];

  for (let index = 0; index < linhaTabela.length; index++) {
    const element = linhaTabela[index];
    let itemNome = element.querySelector("#dados-venda-nome").textContent;
    itens.push({
      item: itemNome,
      quantidade: 0,
      valor: 0,
    });
  }
  if (nomePedido.val().length > 0 && enderecoPedido.val().length > 0) {
    $.ajax({
      type: "POST",
      url: "https://discordapp.com/api/webhooks/1227142180557164625/lTAc2G5amt6diOsN3MhjVO7EN4HJ6BRg9_YEwC-qtS9GAC-ruKq7jW9tauncHH3Wx3xM",
      data: JSON.stringify(
        gerarEmbed(
          nomePedido.val(),
          telefonePedido.val(),
          enderecoPedido.val(),
          observacoes.val(),
          itens
        )
      ),
      success: function (data) {
        var alertaSucesso = $("#alertaSucesso");
        nomePedido.val("");
        telefonePedido.val("");
        enderecoPedido.val("");
        observacoes.val("");
        alertaSucesso.css("display", "block");
        setTimeout(() => {
          alertaSucesso.hide();
        }, 15000);
      },
      contentType: "application/json",
      dataType: "json",
    });
  } else {
  }
});

function gerarEmbed(
  nomeCliente,
  telefoneCliente,
  enderecoCliente,
  observacoes,
  itens = []
) {
  let itensString = "";
  itens.forEach(function (item) {
    itensString = itensString + item.item + "";
  });
  let jsonBase = {
    username: "Benny's",
    avatar_url:
      "https://cdn.discordapp.com/attachments/1227001832660926565/1227131901047869501/logosemgato.webp?ex=66274aa4&is=6614d5a4&hm=73cd25ad4394210b202e5d007ec78e3e5581de80f050f6a4b67d4f9762363d53&",
    content: "",
    embeds: [
      {
        title: "",
        color: 16711680,
        description: "",
        timestamp: window.moment().format("YYYY-MM-DDTHH:mm:ss.MSSZ"),
        author: {
          name: "",
        },
        image: {},
        thumbnail: {
          url: "https://cdn.discordapp.com/attachments/1227001832660926565/1227131901047869501/logosemgato.webp?ex=66274aa4&is=6614d5a4&hm=73cd25ad4394210b202e5d007ec78e3e5581de80f050f6a4b67d4f9762363d53&",
        },
        footer: {},
        fields: [
          {
            name: ":grinning: Cliente",
            value: nomeCliente,
            inline: true,
          },
          {
            name: ":clock3: Data e Hora",
            value: enderecoCliente,
            inline: true,
          },
          {
            name: ":mobile_phone: Contato",
            value: telefoneCliente,
          },
          { name: ":race_car: Veículo", value: observacoes },
          { name: ":screwdriver: Serviço", value: itensString },
        ],
      },
    ],
    components: [],
  };
  return jsonBase;
}

function getRandomizer(bottom, top) {
  return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
}
