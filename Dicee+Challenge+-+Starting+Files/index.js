function player(player_class) {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var image = document.querySelector(`.${player_class}`);
    image.setAttribute("src", `./images/dice${randomNumber}.png`);
}

player("img1");
player("img2");
