function itemLista(nomeItem, quantidade, valor) {
  let html = `<tr class="linha-tabela" id="linha-tabela">
    <td id="dados-venda-nome">${nomeItem}</td>
</tr>`;
  return $(html);
}
