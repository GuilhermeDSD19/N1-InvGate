chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'executeScript') {
        // Seu script aqui
        alert('Script executado!');
    }
});
