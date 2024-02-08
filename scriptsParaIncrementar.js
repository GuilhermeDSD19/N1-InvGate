// Atualizar a fila do N1 
setInterval(function () {
    document.querySelector('#tab_562').click();
}, 1000);

// Ordena por data de criação

function filtraPorCriacao() {
    var colSelect = document.querySelector('select[name="post_filter[order][1][col]"]');

    if (colSelect) {
        // Define o valor no select
        colSelect.value = 'incidents.created_at';

        // Cria um evento de mudança (change) e dispara no elemento do select
        var event = new Event('change', { bubbles: true });
        colSelect.dispatchEvent(event);
    } else {
        console.error('Select não encontrado');
    }
}

filtraPorCriacao()








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




