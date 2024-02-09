document.addEventListener('DOMContentLoaded', function () {
    // Chamando elementos CPF e CNPJ
    const cpfInput = document.getElementById('cpf-input');
    const cnpjInput = document.getElementById('cnpj-input');
    const tipoDocumentoRadio = document.getElementsByName('tipoDocumento');

    // Ouvinte para verificar mudanças na seleção
    tipoDocumentoRadio.forEach(function (radio) {
        radio.addEventListener('change', function () {
            // Mostra os campos com base na escolha
            cpfInput.style.display = (this.value === 'cpf') ? 'block' : 'none';
            cnpjInput.style.display = (this.value === 'cnpj') ? 'block' : 'none';
        });
    });
});


function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return cpf;
}
    
function formatCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos
    cnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    return cnpj;
}
    
document.getElementById('cpf-input').addEventListener('input', function (event) {
    var inputValue = event.target.value;
    event.target.value = formatCPF(inputValue);
});
    
document.getElementById('cnpj-input').addEventListener('input', function (event) {
    var inputValue = event.target.value;
    event.target.value = formatCNPJ(inputValue);
});