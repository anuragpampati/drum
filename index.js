



for(var i=0;i< document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var p  = this.innerHTML;
        makesound(p);
        animation(p);
            if (p == 'w'){
                clickf("tom-1.mp3");
            } 
            if (p == 'a'){
                clickf("tom-2.mp3");
            } 
            if (p == 's'){
                clickf("tom-3.mp3");
            } 
            if (p == 'd'){
                clickf("tom-4.mp3");
            } 
            if (p == 'j'){
                clickf("crash.mp3");
            } 
            if (p == 'k'){
                clickf("snare.mp3");
            } 
            if (p == 'l'){
                clickf("kick-bass.mp3");
            } 
    });
}

document.addEventListener("keypress" , function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(key){

    if (key == 'w'){
        clickf("tom-1.mp3");
    } 
    if (key == 'a'){
        clickf("tom-2.mp3");
    } 
    if (key == 's'){
        clickf("tom-3.mp3");
    } 
    if (key == 'd'){
        clickf("tom-4.mp3");
    } 
    if (key == 'j'){
        clickf("crash.mp3");
    } 
    if (key == 'k'){
        clickf("snare.mp3");
    } 
    if (key == 'l'){
        clickf("kick-bass.mp3");
    }

}


function clickf(st){
    console.log(st);
    var k = "./sounds/" + st;
    var s = new Audio(k);
    s.play();
}

function animation(buttonclick){

    var c  = document.querySelector("."+ buttonclick);

    c.classList.add("pressed");

    setTimeout(function(){
        c.classList.remove("pressed");    }, 100);
}




