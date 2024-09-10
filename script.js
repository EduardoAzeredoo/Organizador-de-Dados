// Função para processar e filtrar os dados de passos
function processData() {
    const pedometerDataInput = document.getElementById('pedometerData').value;
    const threshold = parseFloat(document.getElementById('threshold').value);

    // Convertendo os dados de string para uma array de números
    const pedometerData = pedometerDataInput.split(',').map(Number);

    if (pedometerData.length === 0 || isNaN(threshold)) {
        alert('Insira os dados de passos e o threshold corretamente.');
        return;
    }

    // Calculando média e desvio-padrão
    const mean = pedometerData.reduce((a, b) => a + b, 0) / pedometerData.length;
    const stdDev = Math.sqrt(pedometerData.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / pedometerData.length);

    // Filtrando os dados fora do limite de threshold
    const filteredData = pedometerData.filter(x => (mean - threshold * stdDev) <= x && x <= (mean + threshold * stdDev));

    // Atualizando os resultados na página
    document.getElementById('meanResult').textContent = `Média: ${mean.toFixed(2)} passos`;
    document.getElementById('stdDevResult').textContent = `Desvio-padrão: ${stdDev.toFixed(2)} passos`;
    document.getElementById('filteredDataResult').textContent = `Dados filtrados: ${filteredData.join(', ')}`;
}
