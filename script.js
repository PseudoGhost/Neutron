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
    const newWindow = window.open("home.html", "_blank");
}
