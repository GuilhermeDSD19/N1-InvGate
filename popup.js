document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('executeScript').addEventListener('click', () => {
        const loopInterval = parseInt(document.getElementById('loopInterval').value);

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'executeScript', interval: loopInterval });
        });
    });

    document.getElementById('pararLoop').addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'pararLoop' });
        });
    });
});
