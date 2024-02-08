document.addEventListener('DOMContentLoaded', function () {
    // Este código será executado após o DOM ser carregado completamente

    document.getElementById('executeScript').addEventListener('click', function () {
        const selectedOptions = [];

        // Obtenha todas as checkboxes
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

        // Adicione os valores selecionados ao array
        checkboxes.forEach((checkbox) => {
            selectedOptions.push(checkbox.value);
        });

        const loopInterval = parseInt(document.getElementById('loopInterval').value, 10);

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'executeScript', options: selectedOptions, interval: loopInterval });
        });
    });

    // Adicione o código para parar o looping
    document.getElementById('pararLoop').addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'pararLoop' });
        });
    });
});
