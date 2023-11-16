function generateAnswer() {
    // Logique pour générer la réponse
}

function incrementCounter() {
    let counter = localStorage.getItem('visitCounter');
    counter = counter ? parseInt(counter) + 1 : 1;
    localStorage.setItem('visitCounter', counter);
    document.getElementById('counter').textContent = counter;
}

function resetCounter() {
    localStorage.setItem('visitCounter', '0');
    document.getElementById('counter').textContent = '0';
}

function getIPAddress() {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = 'Adresse IP : ' + data.ip;
        })
        .catch(error => console.error(error));
}

window.onload = function() {
    incrementCounter();
    getIPAddress();
};
