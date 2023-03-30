let player1 = prompt("Gracz 1: wykonaj ruch. Wybierasz papier, nożyce czy kamień?");
let player2 = prompt("Gracz 2: wykonaj ruch. Wybierasz papier, nożyce czy kamień?");

rockPaperScissors(player1, player2);

function rockPaperScissors(player1, player2) {
    let gameRound = [player1, player2];
    switch (true) {
        case gameRound[0] == gameRound[1]: {
            console.log("Remis");
            break;
        }
        case ((gameRound[0] == "papier" && gameRound[1] == "kamień") || (gameRound[0] == "nożyce" && gameRound[1] == "papier") || (gameRound[0] == "kamień" && gameRound[1] == "nożyce")): {
            console.log("PLAYER ONE: " + gameRound[0] + "\n");
            console.log("WYGRYWA\n");
            console.log("PLAYER TWO: " + gameRound[1] + "\n");
            console.log("PRZEGRYWA\n");
            break;
        }
        case ((gameRound[1] == "papier" && gameRound[0] == "kamień") || (gameRound[1] == "nożyce" && gameRound[0] == "papier") || (gameRound[1] == "kamień" && gameRound[0] == "nożyce")): {
            console.log("PLAYER ONE: " + gameRound[0] + "\n");
            console.log("PRZEGRYWA\n");
            console.log("PLAYER TWO: " + gameRound[1] + "\n");
            console.log("WYGRYWA\n");
            break;
        }
        default: {
            console.log("Błędne dane, spróbuj jeszcze raz.");
        }
    }
}

function arrayPrint(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        console.log("\n");
    }
}