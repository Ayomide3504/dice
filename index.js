//Adding username to buttons
var name_one = prompt("Player 1");
var name_two= prompt("Player 2");
document.querySelectorAll("button")[1].innerHTML=name_one;
document.querySelectorAll("button")[2].innerHTML=name_two;
//Calculation for Math random
var calculus=Math.floor((Math.random()*6)+1);
//link image to a variable and player !
var link="dice"+calculus+".png";
document.querySelectorAll("button")[1].addEventListener("click", function code(){
    document.querySelectorAll("img")[0].setAttribute("src",link);
});
//link image to a variable and player 2
var maths=Math.floor((Math.random()*6)+1);


var link_two="dice"+maths+".png";
document.querySelectorAll("button")[2].addEventListener("click",function code_two(){
    document.querySelectorAll("img")[1].setAttribute("src",link_two);

//Back end in Front end
if(link>link_two){
    //Calling username requested as winner in if and else statements
   document.querySelector("h1").innerHTML=name_one+" is the Winner!";
}else 
if(link_two>link){
    document.querySelector("h1").innerText=name_two+" is the Winner!";
}else if(link_two=link){
    var audio=new Audio();
    audio.play();
    document.querySelector("h1").innerText="It's a draw"
}
}
);