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
    // Open a new window with about:blank
    const newWindow = window.open("about:blank", "_blank");
    
    // Once the window is loaded, set its content to home.html
    newWindow.addEventListener("load", function() {
        fetch("home.html")
            .then(response => response.text())
            .then(html => {
                newWindow.document.open();
                newWindow.document.write(html);
                newWindow.document.close();
            })
            .catch(error => console.error("Error loading content:", error));
    });
}
