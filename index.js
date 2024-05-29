

function desenharCartela() {

    // Selecionar onde se deseja criar o elemento
    const pai_div_cartelas = document.getElementById('body_cartelas');

    // Criar uma div para a cartela
    const div_cartelas = document.createElement('div');
    div_cartelas.className = 'cartelas';

    // Inserir a div dentro do pai
    pai_div_cartelas.appendChild(div_cartelas);

    //Criar um elemnto de texto para o Nome do jogador
    const h4_jogador = document.createElement('h4');
    h4_jogador.innerText = 'Nome jogador';


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

    for(var i = 0; i < 5; i++){
        const tr = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            const td = document.createElement('td');
            td.innerText = 'X';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }






    //Iserir na tabela
    div_cartelas.appendChild(tabela);
    tabela.appendChild(thead);
    tabela.appendChild(tbody);



}