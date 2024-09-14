let intervalId;
const refreshButton = document.querySelector('#btn_refresh_requests');

function iniciarLoop(intervalo, btnUpdate) {
    intervalId = setInterval(() => {
        btnUpdate.click();
        removeLoading();
    }, intervalo);
}

function pararLoop() {
    clearInterval(intervalId);
}

chrome.runtime.onMessage.addListener((request) => {
    if (request.action === 'executeScript') {
        iniciarLoop(request.interval, refreshButton);
        alert('Script executado!');
    }
    if (request.action === 'pararLoop') {
        pararLoop();
        alert('Script finalizado!');
    }
});