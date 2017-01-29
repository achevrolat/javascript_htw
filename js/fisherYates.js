var cardsOne = [];
var cardsTwo = [];
var cardsThree = [];


function main(){
    CreateCards();
    clearFields();

}

function restart(){
    clearFields();
}



//Launch the game.
//IMPORTANT: you have to press the Spiel button to display cards

function startGame() {
        var myMise = parseInt(document.getElementById("Mise").value);
        var myPM = parseInt(document.getElementById("PM").value);
        console.log(myMise + " " + myPM);
        if(myMise <= myPM && myMise > 0){
            myPM = myPM - myMise;
            document.getElementById("PM").value = myPM;

            cardsOne = shuffle(cardsOne);
            cardsTwo = shuffle(cardsTwo);
            cardsThree = shuffle(cardsThree);

            displayCards();
            var win = WinOrLoose();
            console.log(win);
            if(win == 0){
                document.getElementById("PM").value = myPM + myMise * 2;
                document.getElementById("gains").value = myMise * 2;
                alert("Gewinn: " + myMise * 2 + " !")
            }
            else if(win == 1){
                document.getElementById("PM").value = myPM + myMise;
                document.getElementById("gains").value = myMise;
                alert("Gewinn: " + myMise + " !")
            }
            else{
                document.getElementById("gains").value = 0;
            }
        }
        else{
            alert("nicht genug Geldbeutel");
        }
}

//Use to restart the game
function clearFields(){
    document.getElementById("Mise").value = "";
    document.getElementById("PM").value = 200;
    document.getElementById("carte1").value = "";
    document.getElementById("carte2").value = "";
    document.getElementById("carte3").value = "";
    document.getElementById("gains").value = "";

}

function displayCards(){
    document.getElementById("carte1").src = "cards/" + cardsOne[3] + ".png"
    document.getElementById("carte2").src = "cards/" + cardsTwo[3] + ".png"
    document.getElementById("carte3").src = "cards/" + cardsThree[3] + ".png"

}

function CreateCards(){

    cardsOne.push("roiPique");
    cardsOne.push("roiCoeur");
    cardsOne.push("roiTrefle");
    cardsOne.push("roiCarreau");
    cardsTwo.push("damePique");
    cardsTwo.push("dameCoeur");
    cardsTwo.push("dameTrefle");
    cardsTwo.push("dameCarreau");
    cardsThree.push("valetPique");
    cardsThree.push("valetCoeur");
    cardsThree.push("valetTrefle");
    cardsThree.push("valetCarreau");
}


//Conditions of victory
function WinOrLoose(){
    var carte = [];
    var tmp="";

    for(var i = cardsOne[3].length - 2; i < cardsOne[3].length; i++ ){
        tmp = tmp + cardsOne[3][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = cardsTwo[3].length - 2; i < cardsTwo[3].length; i++ ){
        tmp = tmp + cardsTwo[3][i];
    }
    carte.push(tmp);
    tmp="";

    for(var i = cardsThree[3].length - 2; i < cardsThree[3].length; i++ ){
        tmp = tmp + cardsThree[3][i];
    }
    carte.push(tmp);

    //if 3 spades or club or heart or diamond
    //you win double
    
    if(carte[0] == carte[1] && carte[1] == carte[2]){
        return 0;
        
    //if only red or only black
    //you loose nothing
    }else if((carte[0] == "es" || carte[0] == "bs") && (carte[1] == "es" || carte[1] == "bs") && (carte[2] == "es" || carte[2] == "bs")){
        return 1;
    }else if((carte[0] == "th" || carte[0] == "ds") && (carte[1] == "th" || carte[1] == "ds") && (carte[2] == "th" || carte[2] == "ds")){
        return 1;
    }
    
    //else you loose
    return -1;


}


//Fisher-Yates shuffle
// with the help of the website https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var copy = [], n = array.length, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        copy.push(array.splice(i, 1)[0]);
    }

    return copy;
}