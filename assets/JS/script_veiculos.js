document.getElementById('marca').addEventListener('change', carregarModelos);

function carregarModelos() {
    var marcaSelecionada = document.getElementById('marca').value;
    var modelosSelect = document.getElementById('modelo');
    modelosSelect.innerHTML = ''; // Limpa os modelos atuais

    // Modelos correspondentes à marca selecionada
    switch (marcaSelecionada) {
        case 'Chevrolet':
            adicionarModelo('Onix');
            adicionarModelo('Prisma');
            adicionarModelo('Cruze');
            adicionarModelo('S10');
            adicionarModelo('Montana');
            break;
        case 'Mercedes-Benz':
            adicionarModelo('Actros');
            adicionarModelo('Arocs');
            adicionarModelo('Axor');
            adicionarModelo('Accelo');
            break;
        case 'DAF':
            adicionarModelo('ModeloA');
            adicionarModelo('ModeloB');
            break;

        default:
            adicionarModelo('ModeloAleatorio1');
            adicionarModelo('ModeloAleatorio2');
            break;
    }
}

function adicionarModelo(nomeModelo) {
    var modelosSelect = document.getElementById('modelo');
    var option = document.createElement('option');
    option.value = nomeModelo;
    option.text = nomeModelo;
    modelosSelect.add(option);
}

function cadastrarVeiculo() {}