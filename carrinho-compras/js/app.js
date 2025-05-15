function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 
    if(quantidade == null || quantidade == 0){return}
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    carrinho.innerHTML = carrinho.innerHTML + 
    `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`;
    let precoAntigo = valorTotal.innerHTML.split('R$')[1];
    preco = preco + Number.parseInt(precoAntigo);
    valorTotal.innerHTML = `R$${preco}`;
    document.getElementById('quantidade').value = null;
}

function limpar(){
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = ``;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = "R$0";
}