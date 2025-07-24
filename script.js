let clienteWeb = null;

const clientId = 'Esp32' + Math.floor(Math.random() * 900) + 100;
clienteWeb = new Paho.MQTT.Client('broker.hivemq.com', 8884, clientId);

// Obtem acesso ao elemento do HTML
const tempPagina = document.getElementById("temperatura")

clienteWeb.onMessageArrived = function(message) {
    const payload = message.payloadString;
    const dados = JSON.parse(payload)

    tempPagina.textContent = String(dados.temperatura) + " °C"
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