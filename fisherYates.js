
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

function startGame() {
    try{
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
            }else if(win == 1){
                document.getElementById("PM").value = myPM + myMise;
                document.getElementById("gains").value = myMise;
                alert("Gewinn: " + myMise + " !")
            }else{
                document.getElementById("gains").value = 0;
            }
        }else{
            alert("not enought money");
        }
    }
    catch(e){
        console.log(e);
    }
}


function clearFields(){
    document.getElementById("Mise").value = "";
    document.getElementById("PM").value = 200;
    document.getElementById("C1").value = "";
    document.getElementById("C2").value = "";
    document.getElementById("C3").value = "";
    document.getElementById("gains").value = "";

}

function displayCards(){

    //document.getElementById("C1").value = cardsOne[3];
    document.getElementById("C1").src = "./IMG/cards/" + cardsOne[3] + ".png"
    //document.getElementById("C2").value = cardsTwo[3];
    document.getElementById("C2").src = "./IMG/cards/" + cardsTwo[3] + ".png"
    //document.getElementById("C3").value = cardsThree[3];
    document.getElementById("C3").src = "./IMG/cards/" + cardsThree[3] + ".png"

}

function CreateCards(){

    cardsOne.push("king_of_spades");
    cardsOne.push("king_of_hearth");
    cardsOne.push("king_of_clubs");
    cardsOne.push("king_of_diamonds");
    cardsTwo.push("queen_of_spades");
    cardsTwo.push("queen_of_hearth");
    cardsTwo.push("queen_of_clubs");
    cardsTwo.push("queen_of_diamonds");
    cardsThree.push("jack_of_spades");
    cardsThree.push("jack_of_hearth");
    cardsThree.push("jack_of_clubs");
    cardsThree.push("jack_of_diamonds");
}



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

    if(carte[0] == carte[1] && carte[1] == carte[2]){
        return 0;
    }else if((carte[0] == "es" || carte[0] == "bs") && (carte[1] == "es" || carte[1] == "bs") && (carte[2] == "es" || carte[2] == "bs")){
        return 1;
    }else if((carte[0] == "th" || carte[0] == "ds") && (carte[1] == "th" || carte[1] == "ds") && (carte[2] == "th" || carte[2] == "ds")){
        return 1;
    }
    return -1;


}

function shuffle(array) {
    var copy = [], n = array.length, i;

    // While there remain elements to shuffleâ€¦
    while (n) {

        // Pick a remaining elementâ€¦
        i = Math.floor(Math.random() * n--);

        // And move it to the new array.
        copy.push(array.splice(i, 1)[0]);
    }

    return copy;
}
