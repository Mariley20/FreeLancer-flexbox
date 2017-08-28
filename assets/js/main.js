agregarImg();
var img;
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
agregarImg();

var btnImages = document.getElementsByClassName('box-portafolio')[0];
btnImages.addEventListener('click', activarModal);

function activarModal(event) {
    var element = event.target.nodeName;
    if (element == 'IMG') {
        img = event.target;
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
    }
}
span.onclick = function() {
    modal.style.display = "none";
}

function agregarImg() {
    var imagenes = [
        "assets/img/portafolio/cabin.png",
        "assets/img/portafolio/cake.png",
        "assets/img/portafolio/circus.png",
        "assets/img/portafolio/game.png",
        "assets/img/portafolio/safe.png",
        "assets/img/portafolio/submarine.png"
    ];
    var padre = document.getElementsByClassName('box-portafolio')[0];
    var cantidadImg = 3;
    for (var i = 0; i < imagenes.length;) {
        var tag_div = document.createElement('div')
        for (var j = 0; j < cantidadImg; j++) {
            var tag_img = document.createElement('img');
            tag_img.setAttribute('src', imagenes[i]);
            tag_img.alt = 'imagen ' + i;
            tag_div.appendChild(tag_img);
            i++;
        }
        padre.appendChild(tag_div);
    }
}

/*botn mennu*/
$(document).ready(main);
var contador = 1;
function main(){
    $('.menu_bar').click(function(){
        //$('nav').toggle();
        console.log('entro libremente')
        if (contador == 1) {
            $('nav').animate({
                display: 'none'
            });
            contador = 0;
        }else{
            $('nav').animate({
                left: '-100%'
            });
        }
    });
}