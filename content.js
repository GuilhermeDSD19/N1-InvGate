let intervalId;
const refreshButton = document.querySelector('#btn_refresh_requests');

function filtraPorFila() {
    // Criar a função
}

function removeLoading() {
    const loading = document.querySelector('.content-loader')
    if (loading) {
        loading.style.display = 'none'
        console.log("Apaguei")
    } else {
        console.log("Não apaguei")
    }
    /* btn.addEventListener('click', function () {
        const contentDiv = document.querySelector('.content');
        contentDiv.classList.remove('content--loading');
    }); */
}

function iniciarLoop(intervalo, btnUpdate) {
    intervalId = setInterval(() => {
        btnUpdate.click();
        removeLoading();
    }, intervalo);
}

function pararLoop() {
    clearInterval(intervalId);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'executeScript') {
        // filtraPorFila() -- EM DESENVOLVIMENTO
        iniciarLoop(request.interval, refreshButton);
        alert('Script executado!');
    }
    if (request.action === 'pararLoop') {
        pararLoop();
        alert('Script finalizado!');
    }
});