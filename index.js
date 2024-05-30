function desenharCartela(jogador) {

    gerarCartela();

    // Selecionar onde se deseja criar o elemento
    const pai_div_cartelas = document.getElementById('body_cartelas');

    // Criar uma div para a cartela
    const div_cartelas = document.createElement('div');
    div_cartelas.className = 'cartelas';

    // Inserir a div dentro do pai
    pai_div_cartelas.appendChild(div_cartelas);

    //Criar um elemnto de texto para o Nome do jogador
    const h4_jogador = document.createElement('h4');
    h4_jogador.innerText = jogador.nome;


    //Inserir o nome do jogador na div
    div_cartelas.appendChild(h4_jogador);

    //Criar a tabela do bingo
    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    //Criando os elemtos do thead
    const thB = document.createElement('th');
    const thI = document.createElement('th');
    const thN = document.createElement('th');
    const thG = document.createElement('th');
    const thO = document.createElement('th');

    thB.innerText = 'B'
    thI.innerText = 'I'
    thN.innerText = 'N'
    thG.innerText = 'G'
    thO.innerText = 'O'

    //Inserir os th nos thead
    thead.appendChild(thB);
    thead.appendChild(thI);
    thead.appendChild(thN);
    thead.appendChild(thG);
    thead.appendChild(thO);

    for (var i = 0; i < 5; i++) {
        const tr = document.createElement('tr');
        for (var j = 0; j < 5; j++) {
            const td = document.createElement('td');
            td.innerText = jogador.cartela[j][i];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }


    //Iserir na tabela
    div_cartelas.appendChild(tabela);
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
}

function gerarColuna(quantidade, inicio, fim) {
    var coluna = [];
    while (coluna.length < quantidade) {
        var aleatorio = Math.floor(Math.random() * (fim - inicio) + inicio);
        if (!coluna.includes(aleatorio)) {
            coluna.push(aleatorio);
        }

    }
    return coluna;
}


function gerarCartela() {
    var cartela = [gerarColuna(5, 1, 15), gerarColuna(5, 16, 30), gerarColuna(5, 31, 45), gerarColuna(5, 46, 60), gerarColuna(5, 61, 75)];


    console.log(cartela);
    return cartela;

}

function inscreverJogador() {
    const nome = prompt('Digite o nome do jogador: ');


    if (nome.length < 4) {
        alert('O nome precisa ter mais de 4 caracteres');
        return;
    }

    const cartela = gerarCartela();

    const jogador = {
        nome: nome,
        cartela: cartela
    }

    desenharCartela(jogador);
}