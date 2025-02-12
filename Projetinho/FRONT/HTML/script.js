function buscarClima() {
    let cidade = document.getElementById("cidade").value; 
    let apiKey = "b3c532991c8048bcbf1191901251202"; 
    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&aqi=no`;

    fetch(url)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(data => {
            let temperatura = data.current.temp_c; // Pega a temperatura
            let condicao = data.current.condition.text; // Pega a condição do tempo
            let icone = data.current.condition.icon; // Pega o ícone do tempo

            document.getElementById("resultado").innerHTML = `
                <div class="card p-3 shadow-sm">
                    <h4 class="text-primary">${data.location.name}, ${data.location.country}</h4>
                    <img src="https:${icone}" alt="Ícone do tempo">
                    <p class="fw-bold">${temperatura}°C - ${condicao}</p>
                </div>
            `;
        })
        .catch(error => {
            document.getElementById("resultado").innerHTML = `
                <div class="alert alert-danger">Cidade não encontrada! Tente novamente.</div>
            `;
        });
}
