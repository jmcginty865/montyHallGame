/**
 * Created by RicochetMKXI on 2/11/2017.
 */
var firstPick = true;
var carChoose;
var carDoor = Math.floor(Math.random() * 3 + 1);
document.getElementById("doorAnswer").innerHTML = carDoor;

function doorOne(){
    if (firstPick == true){
        firstPick=false;
        if( carDoor == 1){
            carChoose = true;
        }
        else{
            carChoose = false;
        }
        if( carDoor == 3 ){
            document.getElementById("doorResult").innerHTML = "You picked door one. <b> The goat is behind door number two! </b><br> Did you want to change your choice?";
        }
        else {
            document.getElementById("doorResult").innerHTML = "You picked door one. <b> The goat is behind door number three! </b><br> Did you want to change your choice?";
        }
    }
}

function doorTwo(){
    if(firstPick == true){
        firstPick =false;
        if(carDoor == 2){
            carChoose = true;
        }
        else{
            carChoose = false;
        }
        if(carDoor == 3){
            document.getElementById("doorResult").innerHTML = "You picked door two. <b> The goat is behind door number one! </b><br> Did you want to change your choice?";
        }
        else {
            document.getElementById("doorResult").innerHTML = "You picked door two. <b> The goat is behind door number three! </b><br> Did you want to change your choice?";
        }
    }
}

function doorThree(){
    if(firstPick == true){
        firstPick =false;
        if(carDoor == 3){
            carChoose = true;
        }
        else{
            carChoose = false;
        }
        if(carDoor == 2){
            document.getElementById("doorResult").innerHTML = "You picked door three. <b> The goat is behind door number one! </b><br> Did you want to change your choice?";
        }
        else {
            document.getElementById("doorResult").innerHTML = "You picked door Three. <b> The goat is behind door number two! </b><br> Did you want to change your choice?";
        }
    }
}

function switchDoor(){
    if (carChoose){
        document.getElementById("doorResult").innerHTML = "You lost.";
    }
    else{
        document.getElementById("doorResult").innerHTML = "You won";
    }

}

function keepDoor(){
    if(carChoose){
        document.getElementById("doorResult").innerHTML = "You won.";
    }
    else {
        document.getElementById("doorResult").innerHTML = "You lost";
    }
}
