function comprar(){
    let lugar = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd');
    let quantidadeLocal;
    switch (lugar) {
        case 'inferior':
            quantidadeLocal = document.getElementById('qtd-inferior');
            break;
        case 'superior':
            quantidadeLocal = document.getElementById('qtd-superior');
            break;
        case 'pista':
            quantidadeLocal = document.getElementById('qtd-pista');
            break;
    }
    if(quantidade.value > quantidadeLocal.innerText){
        alert("Compra ultrapassa ingressos disponíveis");
        quantidade.value = null;
    }
    quantidadeLocal.innerHTML = `${quantidadeLocal.innerText - quantidade.value}`;
    quantidade.value = null;
}