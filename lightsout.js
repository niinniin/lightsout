/**
 * Created by NinaYoda on 2016-03-13.
 */

function nummer(id){
    console.log(id);
    var click = id;
    switchBg(click);
    console.log("ändrar färg på den klickade cellen");
    if(id>4){
        var ovan  = id-10;
        switchBg(ovan);
        console.log("ändrar färg på ovan");
    }

    if(id<40){

        var under = id+10;
        switchBg(under);
        console.log("ändrar färg på under");
    }

    if(id != 0 && id!=10 && id!=20 && id!=30 && id!=40){

        var vanster = id - 1;
        switchBg(vanster);
        console.log("ändrar färg på vänster");
    }

    if(id !== 4 && id !==14 && id !==24 && id !==34 && id !==44){
        var hoger = id+1;
        switchBg(hoger);
        console.log("ändrar färg på höger");
    }

    var winner = checkIfAllAreGray();
    if (winner == true){
        alert("Grattis du har klarat Lightsout!");
        location.reload();
    }
    else{
        console.log("Kom igen, snart vinner du!")

    }
}

function switchBg(id){
    var bg = document.getElementById(id);
    console.log("hämtar element " +id);

    if(bg.style.backgroundColor!="gray") {
        bg.style.backgroundColor="gray";
    }

    else{
        bg.style.backgroundColor="white";
    }

}

function checkIfAllAreGray(){
    var cellID = [0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23 ,24, 30, 31, 32, 33, 34, 40, 41, 42, 43, 44];
    var winner = true;
    for(var cell in cellID){

        var cellen = document.getElementById(cellID[cell]);
        if (cellen.style.backgroundColor!="gray"){
            winner = false;
        }

    }
    return winner;
}