$(document).ready(function() {
   
    $('#sobre').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 1000);
        return false;
    });

});

$('.navperf ul li').click(function(){
    
    $(this).addClass("active").siblings().removeClass('active');
})

const tab8tn = document.querySelectorAll('.nav ul li');
const tab = document.querySelectorAll('.tab');

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);







let bio = document.querySelector('bio');

function bioText(){
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0,100) + "...";
    bio.innerHTML += "&nbsp;" + `<span onclick='addLength()'id='see-more-bio'> Ver mais...</span>`;
    
}
bioText();

function addLength(){
    bio.innerHTML = bio.oldText;
    bio.innerHTML +=  "&nbsp;" + `<span onclick='addLength()'id='see-less-bio'> Ver menos.</span>`;
}


