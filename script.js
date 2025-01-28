var rect = document.querySelector("#center")

rect.addEventListener("mousemove",function(details){
var rectanglelocation = rect.getBoundingClientRect()
var insiderect = (details.clientX - rectanglelocation.left);

   
if(insiderect < rectanglelocation.width/2){
    console.log("left");
}

else{
    console.log("right");
    
}
})