
//  OUTROS --- / --------------------------------

// CLICKA NO BOTÃO ORDEM

function clickNoBotaoOrdem() {
    var buttons = document.querySelectorAll('.requestListFiltersButton[onclick="filterDrop(this,\'#incidentsFilter_order\')"]');
    if (buttons.length > 0) {
        buttons[0].click(); // Clica no primeiro botão encontrado
    } else {
        console.error('Botão ORDEM não encontrado');
    }
}
clickNoBotaoOrdem()

// NÃO LEMBRO O QUE FAZ

var engrenagens = document.querySelectorAll('.itemDrop.dropDown');

// Adiciona um ouvinte de evento de clique para cada engrenagem
engrenagens.forEach(function (engrenagem) {
    engrenagem.addEventListener('click', function () {
        // Procura pela opção assign_to_me_action dentro do pseudoelemento ::before
        var assignToMeOption = engrenagem.querySelector('::before #edit_action');

        // Se a opção estiver disponível, clique nela
        if (assignToMeOption) {
            assignToMeOption.click();
        } else {
            console.log('A opção assign_to_me_action não está disponível para a engrenagem clicada.');
        }
    });
});