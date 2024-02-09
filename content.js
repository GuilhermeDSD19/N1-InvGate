let intervalId;

function iniciarLoop(intervalo) {
    intervalId = setInterval(() => filtraPorCriacao().then(() => document.querySelector('#tab_562').click()), intervalo);
}

function pararLoop() {
    clearInterval(intervalId);
}

function waitForSelectChange(colSelect) {
    return new Promise(resolve => colSelect.addEventListener('change', resolve, { once: true }));
}

function filtraPorCriacao() {
    return new Promise(resolve => {
        const colSelect = document.querySelector('select[name="post_filter[order][1][col]"]');
        const valSelect = document.querySelector('select[name="post_filter[order][1][val]"]');

        if (!colSelect || !valSelect) {
            console.error('Select não encontrado');
            return resolve();
        }

        colSelect.value = 'incidents.created_at';
        valSelect.value = 'DESC';

        Promise.all([waitForSelectChange(colSelect), waitForSelectChange(valSelect)])
            .then(resolve);

        colSelect.dispatchEvent(new Event('change', { bubbles: true }));

        // Adiciona um pequeno atraso (pode ser ajustado conforme necessário)
        setTimeout(() => valSelect.dispatchEvent(new Event('change', { bubbles: true })), 100);
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'executeScript') {
        filtraPorCriacao().then(() => iniciarLoop(request.interval));
        alert('Script executado!');

    } else if (request.action === 'pararLoop') {
        pararLoop();
        alert('Script finalizado!');
    }
});
