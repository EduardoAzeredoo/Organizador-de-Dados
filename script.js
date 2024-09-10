// Função para alternar entre abas
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

// Função para processar dados dos funcionários
function processFuncionariosData() {
    const dataInput = document.getElementById('funcionariosData').value;
    const threshold = parseFloat(document.getElementById('funcionariosThreshold').value);
    const category = document.getElementById('funcionariosCategory').value;

    const data = dataInput.split(',').map(Number);

    if (data.length === 0 || isNaN(threshold)) {
        alert('Insira os dados e o threshold corretamente.');
        return;
    }

    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const stdDev = Math.sqrt(data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length);

    const filteredData = data.filter(x => (mean - threshold * stdDev) <= x && x <= (mean + threshold * stdDev));

    document.getElementById('funcionariosMeanResult').textContent = `Média: ${mean.toFixed(2)} passos`;
    document.getElementById('funcionariosStdDevResult').textContent = `Desvio-padrão: ${stdDev.toFixed(2)} passos`;
    document.getElementById('funcionariosFilteredDataResult').textContent = `Dados filtrados: ${filteredData.join(', ')}`;
}

// Função para processar dados gerais
function processGeralData() {
    const dataInput = document.getElementById('geralData').value;
    const threshold = parseFloat(document.getElementById('geralThreshold').value);

    const data = dataInput.split(',').map(Number);

    if (data.length === 0 || isNaN(threshold)) {
        alert('Insira os dados e o threshold corretamente.');
        return;
    }

    const mean = data.reduce((a, b) => a + b, 0) / data.length;
    const stdDev = Math.sqrt(data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / data.length);

    const filteredData = data.filter(x => (mean - threshold * stdDev) <= x && x <= (mean + threshold * stdDev));

    document.getElementById('geralMeanResult').textContent = `Média: ${mean.toFixed(2)} passos`;
    document.getElementById('geralStdDevResult').textContent = `Desvio-padrão: ${stdDev.toFixed(2)} passos`;
    document.getElementById('geralFilteredDataResult').textContent = `Dados filtrados: ${filteredData.join(', ')}`;
}
