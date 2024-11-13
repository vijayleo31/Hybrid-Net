function fetchQuote() {
    fetch('/api/quote')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = `"${data.quote}"`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
}

// Load a quote when the page is loaded
document.addEventListener("DOMContentLoaded", fetchQuote);
