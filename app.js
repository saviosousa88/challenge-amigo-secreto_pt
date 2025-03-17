// Array para armazenar os participantes
let amigos = []; 

function adicionarAmigo() {
    // 1. Captura do valor do campo
    const input = document.getElementById('amigo'); // Seleciona pelo ID
    const nome = input.value.trim(); // Remove espacos extras

    // 2. Validacao da entrada
    if (!nome) { // Verifica se esa vazio apos o trim()
        alert('Por favor, insira um nome.'); // Mensagem exata solicitada
        return; // Interrompe a execucao
    }

    // 3. Atualizacao do array
    amigos.push(nome); // Adiciona ao final do array

    // 4. Limpeza do campo
    input.value = ''; // Reseta o input
    
    // Atualizacao visual da lista
    atualizarListaAmigos(); // Chama funcao auxiliar
}

function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    // 1. Validacao de amigos disponiveis
    if (amigos.length === 0) { // Verifica se o array esta vazio
        alert('Adicione pelo menos um amigo para sortear!');
        return; // Interrompe a execucao
    }

    // 2. Geracao do indice aleatirio
    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Indice entre 0 e (n-1)

    // 3. Obtencao do nome sorteado
    const nomeSorteado = amigos[indiceSorteado]; // Acesso direto ao array

    // 4. Exibicao do resultado
    const resultado = document.getElementById('resultado'); // Seleciona elemento pelo ID
    resultado.innerHTML = `<li>🎉 O amigo secreto é: ${nomeSorteado} 🎉</li>`; // Atualiza conteudo
}
