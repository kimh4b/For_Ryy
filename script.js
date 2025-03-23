function nextPage() {
    window.location.href = "yes.html"; // Redirects to yes.html
}

function moveButton() {
    let button = document.getElementById("noButton");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
