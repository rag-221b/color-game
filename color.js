var numSquares=6;
var colors=generateRandom(numSquares);
var color=pickColor();
var squares= document.querySelectorAll(".square");
var TText=document.getElementById("colortype");
var message1=document.getElementById("message");
var upperColor=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandom(numSquares);
    color=pickColor();
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }


})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandom(numSquares);
    color=pickColor();
    for(var i=0;i<squares.length;i++){
    
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    
    }



})

resetBtn.addEventListener("click", function(){
  colors=generateRandom(6);
  color=pickColor();
  TText.textContent=color;
  for(var i=0;i<squares.length;i++){
      squares[i].style.backgroundColor=colors[i];
  }
  upperColor.style.backgroundColor="#f5deb3";

})

TText.textContent=color;
for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click", function(){
		
		var clickedColor = this.style.background;
        console.log(clickedColor,color);
		
		
		if(clickedColor === color){
        message1.textContent="CORRECT";
        changeColor(color);
        upperColor.style.backgroundColor=color;
        
         
      
		}
        else{
          message1.textContent="TRY AGAIN";
         this.style.backgroundColor="#f5deb3";
        }
		});

}









function changeColor(colorz){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colorz;
    }
}

function generateRandom(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
     var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);   
    

    return "rgb("+ r +", " + g + ", " + b + ")";
}
function pickColor(){
    var i =Math.floor(Math.random()*colors.length);
    return colors[i];
}