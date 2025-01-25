

const toggleButton = document.querySelector("#toggle_button");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

function loadColorMode(){
    const colorMode= localStorage.getItem(storageKey);
    root.classList.add(colorMode || defaultMode);
    updateToggleButton();
}


toggleButton.addEventListener("click",() =>{
    saveColorMode();

})

function saveColorMode(){
    const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
    root.classList.remove("light-mode","dark-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

function updateToggleButton(){
    if(root.classList.contains("dark-mode")){
        toggleButton.style.backgroundImage = "var(--moon)";
        document.getElementById("nom").style.display="none";
        document.getElementById("sillow").style.display="";
    }else{
        toggleButton.style.backgroundImage = "var(--sun)";
        document.getElementById("nom").style.display="";
        document.getElementById("sillow").style.display="none";

    }
}



var a;


function show_cv(){
    
    if(a==1){
        document.getElementById('hero').style.display='none';

        document.getElementById("cvscroller").style.display="";
        document.getElementById("contact-section").style.display="none";
        document.getElementById("imga1").style.display='none';
        document.getElementById("imga2").style.display='none';
        document.getElementById("about-me").style.display="none";
        document.getElementById("projectwrapper").style.display="none";

        sidebar.classList.toggle('active');
        return a=0

    }
    else{
        
        document.getElementById("cvscroller").style.display="none";
        document.getElementById('hero').style.display='';

        return a=1;
    }
}

function close_cv() {
    const cvscroller = document.getElementById("cvscroller");
    document.getElementById('hero').style.display='';


    cvscroller.style.display = "none";
    
    a = 1;
}

let btn = document.querySelector('#btn');
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle('active');
};

var b;
function show_projects(){
    if(b==1){
        document.getElementById('hero').style.display='none';

        document.getElementById("projectwrapper").style.display="";
        document.getElementById("contact-section").style.display="none";
        document.getElementById("cvscroller").style.display="none";
        document.getElementById("imga1").style.display='none';
        document.getElementById("imga2").style.display='none';
        document.getElementById("about-me").style.display="none";
        sidebar.classList.toggle('active');
        return b=0

    }
    else{
        document.getElementById("projectwrapper").style.display="none";
        document.getElementById('hero').style.display='';

        return b=1;
    }
}

var c;
function show_contact(){
    if(c==1){
        document.getElementById('hero').style.display='none';
        document.getElementById("contact-section").style.display="";
        document.getElementById("cvscroller").style.display="none";
        document.getElementById("imga1").style.display='none';
        document.getElementById("imga2").style.display='none';
        document.getElementById("about-me").style.display="none";
        document.getElementById("projectwrapper").style.display="none";
        sidebar.classList.toggle('active');
        return c=0

    }
    else{
        
        document.getElementById("contact-section").style.display="none";
        document.getElementById('hero').style.display='';
        return c=1;
    }
}

var d;
function show_about(){
    if(d==1){
        document.getElementById('hero').style.display='none';


        document.getElementById("about-me").style.display="";
        document.getElementById("cvscroller").style.display="none";
        document.getElementById("projectwrapper").style.display="none";
        document.getElementById("contact-section").style.display="none";
        sidebar.classList.toggle('active');
        return d=0

    }
    else{
        document.getElementById("about-me").style.display="none";
        document.getElementById('hero').style.display='';
        return d=1;
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const sidebarLogo = document.getElementById('btn');
    const heroAnimation = document.getElementById('hero_animation');
    const heroAnimationImg = document.getElementById('hero__animation__img');

    let isAnimationRunning = false;
    let originalAnimation = '';

    sidebarLogo.addEventListener('click', () => {
        if (!isAnimationRunning) {
            originalAnimation = heroAnimation.style.animation;

            // Nouvelle animation
            heroAnimation.style.height = '22rem';
            heroAnimation.style.width = '22rem';
            heroAnimation.style.backgroundPosition = 'center';
            heroAnimation.style.backgroundSize = 'cover';
            heroAnimationImg.style.display = 'none';
            heroAnimation.style.animation = 'top-left 0.4s ';
            setTimeout(() => {
                
                heroAnimation.style.height = '20rem';
                heroAnimation.style.width = '20rem';
                heroAnimation.style.backgroundPosition = 'center';
                heroAnimation.style.backgroundSize = 'cover';
                heroAnimationImg.style.backgroundImage= 'var(--tl-4)'; 
                heroAnimationImg.style.display = '';
                }, 400);
            

        
            
                
            isAnimationRunning = true;
        } else {
            // Annuler l'animation
            heroAnimation.style.animation = originalAnimation;
            heroAnimationImg.style.display='none';
            heroAnimationImg.style.backgroundImage= 'var(--tl-1)';
            heroAnimation.style.animation = 'reverse-top-left 0.4s';
            // Rétablir l'affichage de l'image après l'annulation de l'animation
            setTimeout(() => {
            heroAnimation.style.height = '22rem';
            heroAnimation.style.width = '22rem';
            heroAnimation.style.backgroundPosition = 'center';
            heroAnimation.style.backgroundSize = 'cover';
            heroAnimationImg.style.display = '';
            }, 400); // Vous pouvez ajuster cette valeur selon vos besoins
            
            isAnimationRunning = false;
        }
    });
});



//Mouse animation 
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
     "var(--bg)", "var(--bg-alt)"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});


function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.5;
    y += (nextCircle.y - y) * 0.5;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


//handle project 

