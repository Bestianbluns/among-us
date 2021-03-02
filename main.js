var mouse = [];

window.addEventListener('click', function(e){   
    if (document.getElementById('conteiner').contains(e.target)){
        let foto = document.getElementById("floppa");
        let audio = document.getElementById("meow");
        foto.style.left = (mouse[0]-100) + "px";
        foto.style.top = (mouse[1]-100) + "px";
        foto.style.visibility = "visible";
        audio.volume = 0.5;
        audio.play();
        setTimeout(unsetFloppa, 300);
    } else{
      // Clicked outside the box
    }
    audio.pause();
    audio.currentTime = 0;
});

function unsetFloppa(){
    let gato = document.getElementById("floppa");
    gato.style.visibility = "hidden";
}

document.addEventListener('dragstart', function(evt) {
    if (evt.target.tagName == 'IMG') {
      evt.preventDefault();
    }
});

window.onload = function(){
    document.onmousemove = function(e){
        mouse = [e.pageX, e.pageY];
    }
}