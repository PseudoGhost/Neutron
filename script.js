const CORRECT_PASSWORD = "neutron12";

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    if (passwordInput === CORRECT_PASSWORD) {
        openCustomPage();
    } else {
        document.getElementById("errorMessage").style.display = "block";
    }
}

function openCustomPage() {
    const newWindow = window.open("about:blank", "_blank");
    
    newWindow.addEventListener("load", function() {
        fetch("home.html")
            .then(response => response.text())
            .then(html => newWindow.document.write(html))
            .catch(error => console.error("Error loading content:", error));
    });
}
