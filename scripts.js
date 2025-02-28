function loadScript(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js", () => {
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js", () => {
        console.log("Bootstrap and Popper.js loaded");
    });
});
function searchBooks() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
        if (cardTitle.includes(searchQuery)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
