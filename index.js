const processar = async(event) => {
    event.preventDefault();

    // Obter valores digitados (ENTRADA)
    const campoNome = document.querySelector('#nome');
    const campoSobrenome = document.querySelector('#sobrenome');

    const nomeDigitado = campoNome.value;
    const sobrenomeDigitado = campoSobrenome.value;

    const dadosAEnviar = {nome, sobrenome};

    const request = await fetch('/Nome', {
        method: 'POST',
        headers: {
        "Content-Type": "aplication/json"
    },
    body: JSON.stringfy(dadosAEnviar)
    })

    const result = await response.json();

    const { nomeCompleto, nomeCatalogo} = result;
    // Realizar a ação (PROCESSAMENTO)
    const nomeCompleto = `${nomeDigitado} ${sobrenomeDigitado}`;
    const nomeCatalogo = `${sobrenomeDigitado.toUpperCase()}, ${nomeDigitado}`;

    // Exibir os resultados (SAÍDA)
    const mensagem = document.querySelector('#mensagem');
    mensagem.innerHTML = `
        <div>Nome completo = ${nomeCompleto}</div>
        <div>Nome catálogo = ${nomeCatalogo}</div>
    `;
};

document.addEventListener('DOMContentLoaded', () => {
    const botaoProcessar = document.querySelector('#processar');
    botaoProcessar.addEventListener('click', processar);
});