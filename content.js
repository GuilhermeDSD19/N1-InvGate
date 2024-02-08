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
        if (!colSelect) {
            console.error('Select não encontrado');
            return resolve();
        }

        colSelect.value = 'incidents.created_at';
        waitForSelectChange(colSelect).then(resolve);
        colSelect.dispatchEvent(new Event('change', { bubbles: true }));
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'executeScript') {
        const executeWithFilter = request.options.includes('script1');
        filtraPorCriacao().then(() => iniciarLoop(request.interval));
        alert('Script executado!');

    } else if (request.action === 'pararLoop') {
        pararLoop();
    }
});
