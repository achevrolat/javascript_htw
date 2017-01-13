function printPascal(index, zeileNummer) {
    
    var aktuelleZeile = document.getElementById(index).value;
    var pascal = PascalDreieck(aktuelleZeile);
    var lineToAdd = "";
    var arr = String(pascal[aktuelleZeile - 1][Math.floor(aktuelleZeile /2)]).length;
    for (var i = aktuelleZeile - 1; i >= 0; i--) {
        var lineToAdd = "&nbsp;".repeat((aktuelleZeile - i) * arr)
        for (var j = 0; j <= i; j++) {
           lineToAdd += " " + "&nbsp;".repeat(arr - String(pascal[i][j]).length) 
           + pascal[i][j] + "&nbsp;".repeat(arr - String(pascal[i][j]).length); 
        }
        document.getElementById(zeileNummer).innerHTML = "</br>" + lineToAdd 
        + document.getElementById(zeileNummer).innerHTML;
    }
}

function PascalDreieck(aktuelleZeile) {
    
    var i, j;
    var pascal = new Array();

    for (i = 0; i < aktuelleZeile; i++) {
        pascal[i] = new Array();
        pascal[i][0] = 1;
        pascal[i][i] = 1;
    }
    for(i = 0; i < aktuelleZeile; i++) {
        for(j = 1; j < i; j++) {
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
    }
    return pascal;
}

var button = document.getElementById("cal");
button.onclick = function() {
    printPascal("line", "pascal3");
};
