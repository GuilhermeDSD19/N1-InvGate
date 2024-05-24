// Este código será executado após o DOM ser carregado completamente
document.addEventListener('DOMContentLoaded', function () {

    // Passa o intervalo de tempo e inicia o loop
    document.getElementById('executeScript').addEventListener('click', () => {
        const loopInterval = parseInt(document.getElementById('loopInterval').value);

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'executeScript', interval: loopInterval });
        });
    });

    // Finaliza o looping
    document.getElementById('pararLoop').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'pararLoop' });
        });
    });
});
