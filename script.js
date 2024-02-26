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

function changeGame(game) {
    let title = document.getElementById('title');
    let gameDict = {'Diablo JS': 'DiabloJS/'};
    let gameIframe = document.getElementById('gameIframe');
    let introText = document.getElementById('introText');
    let fullscreenButton = document.getElementById('fullscreenButton');
    
    fullscreenButton.style.display = 'block';
    title.innerHTML = game;
    introText.style.display = 'none';
    gameIframe.src = gameDict[game];
    gameIframe.style.display = 'block';
    
    let items = document.querySelectorAll('a.active');
    for (let elem of items) {
        elem.classList.remove('active');
    };
    let element = document.getElementById(game);
    element.classList.add('active');
}
