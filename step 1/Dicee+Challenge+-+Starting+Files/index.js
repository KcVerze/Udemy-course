function player(player_class) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var image = document.querySelector(`.${player_class}`);
    image.setAttribute("src", `./images/dice${randomNumber}.png`);

    return randomNumber;
}

const randomNumber1 = player("img1");
const randomNumber2 = player("img2");

if (randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins";
    }
    else {
        document.querySelector("h1").textContent = "Drew";
    }
