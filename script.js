const temperaturas = [
    {id: 1, temperatura: 23.9},
    {id: 2, temperatura: 25.1},
    {id: 3, temperatura: 22.5},
    {id: 4, temperatura: 24.0},
    {id: 5, temperatura: 26.3},
    {id: 6, temperatura: 21.8},
];

function simularLeitura() {
    //alert("Simulando leitura de temperatura...")
    const numeroSorteado = Math.floor(Math.random() * temperaturas.length)

    const tempSorteado   = temperaturas[numeroSorteado].temperatura

    const temperaturaPagina =  document.getElementById("temperatura")
    temperaturaPagina.textContent = tempSorteado
}