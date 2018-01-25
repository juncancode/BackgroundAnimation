var dispDiv = document.getElementById("display");
var imgNum = 1;
var bgposL = 50;
var bgposR = 50;
var bgposU = 50;
var bgposB = 50;
document.getElementById("changeImgR").addEventListener("click",function(){
   //imgNum = imgNum+1;
   //imgNum++;
    imgNum += 1;
    
    if(imgNum >= 5){
        imgNum = 1;
    }
    //when imgNum is greater or equal to 5, the image will go back to pano1
    dispDiv.style.backgroundImage = "url(img/pano"+imgNum+".jpg)";
});

document.getElementById("changeImgL").addEventListener("click",function(){
    //imgNum = imgNum-1;
    //imgNum--;
   imgNum -= 1;
    
    if(imgNum <= 0){
        imgNum = 4;
    }
    //when imgNum is less than 0, it will go back to pano4
    dispDiv.style.backgroundImage = "url(img/pano"+imgNum+".jpg)";
});

document.getElementById("scrollL").addEventListener("mousemove",function(){
    bgposL -= 1;
    dispDiv.style.backgroundPosition = bgposL+"% center";
});

//when you move mouse on the scrollL div area (20%), it will move to left
document.getElementById("scrollR").addEventListener("mousemove",function(){
   bgposR += 1; 
    dispDiv.style.backgroundPosition = bgposR+"% center";
});

//when you move mouse on the scrollR div area (20%), it will move to right

document.getElementById("scrollU").addEventListener("mousemove",function(){
   bgposU -= 1;
    dispDiv.style.backgroundPosition = 50+"%"+bgposU+"%";
});

document.getElementById("scrollD").addEventListener("mousemove",function(){
   bgposB += 1;
    dispDiv.style.backgroundPosition = 50+"%"+bgposB+"%";
});