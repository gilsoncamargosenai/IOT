let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

// Obtem acesso ao elemento do HTML
const tempPagina = document.getElementById("temperatura")
const umidadePagina = document.getElementById("umidade") 
const timePagina = document.getElementById("time")   

clienteWeb.onMessageArrived = function(message) {
    const payload = message.payloadString;
    const dados = JSON.parse(payload)

    tempPagina.textContent = String(dados.temperatura) + " °C"
    umidadePagina.textContent = String(dados.umidade) + " %"
    const agora = new Date();
    //const horas = agora.getHours().toString().padStart(2, '0');
const dataPt = agora.toLocaleDateString('pt-BR', {
        //year: 'numeric',
       // month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        //second: '2-digit'

    });

    timePagina.textContent = "Atualizado em: " + dataPt;

    setTimeout(function() {
       tempPagina.textContent = "__" 
       umidadePagina.textContent = "__"
    }, 2000);
}

clienteWeb.connect({   
    useSSL: true, 
    onSuccess: function() {
        alert('A conexão com Broker foi bem sucedida')
        clienteWeb.subscribe('senai115/temperatura');
    },
    onFailure: function() {
        alert('A conexão com Broker falhou')
    }
});