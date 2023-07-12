window.onload = placeBottom;
window.onresize = placeBottom;

function placeBottom() {
    var parent = document.getElementById('about-content'),
    image = document.getElementById('about-cosmo-img');
    var space = parent.clientHeight-image.clientHeight-10;
    if(parent.clientWidth >= 1200) {
        space-=10;
    }
    
    image.style.marginTop = space + 'px';
}