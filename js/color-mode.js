

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



function close_cv() {
    const cv_container = document.getElementById("cv_container");
    document.getElementById('hero').style.display='';


    cv_container.style.display = "none";
    
    a = 1;
}

let btn = document.querySelector('#btn');
let sidebar = document.querySelector(".sidebar");

btn.onclick = function(){
    sidebar.classList.toggle('active');
};

// Fonction générique pour gérer l'affichage des sections
function toggleDisplaySection(sectionId) {
    const section = document.getElementById(sectionId);
    const hero = document.getElementById('hero');
    const allSections = ["cv_container", "projectwrapper", "contact-section", "about-me"];
    
    // Vérifie si la section est déjà affichée
    const isSectionVisible = section.style.display !== "none";
    
    // Masquer toutes les sections
    allSections.forEach(id => {
        document.getElementById(id).style.display = "none";
    });
    
    // Si la section est déjà affichée, on cache la section et on montre 'hero'
    if (isSectionVisible) {
        hero.style.display = "";
    } else {
        // Sinon, on affiche la section sélectionnée et cache 'hero'
        section.style.display = "";
        hero.style.display = "none";
    }
}

// Variables pour garder l'état de chaque section
let a = 1, b = 1, c = 1, d = 1;

// Modification des événements pour chaque bouton
document.getElementById("cv_button").addEventListener("click", () => {
    a = toggleDisplaySection("cv_container", a);
});

document.getElementById("projects_button").addEventListener("click", () => {
    b = toggleDisplaySection("projectwrapper", b);
});

document.getElementById("contact_button").addEventListener("click", () => {
    c = toggleDisplaySection("contact-section", c);
});

document.getElementById("about_button").addEventListener("click", () => {
    d = toggleDisplaySection("about-me", d);
});


document.addEventListener('DOMContentLoaded', () => {
    const sidebarLogo = document.getElementById('btn');
    const heroAnimation = document.getElementById('hero_animation');
    const heroAnimationImg = document.getElementById('hero_animation_img');

    let isAnimationRunning = false;
    let originalAnimation = '';
    sidebarLogo.addEventListener('click', () => {
        if (!isAnimationRunning) {
            // Sauvegarde l'animation originale
            originalAnimation = heroAnimation.style.animation;
    
            // Nouvelle animation
            heroAnimation.style.height = '20rem';
            heroAnimation.style.width = '20rem';
            heroAnimation.style.backgroundPosition = 'center';
            heroAnimation.style.backgroundSize = 'cover';
            heroAnimation.style.animation = 'top-left 0.4s';
            heroAnimation.style.backgroundImage = 'var(--tl-4)'; // Change directement l'image de fond
    
            isAnimationRunning = true;
        } else {
            // Rétablir l'animation et l'image d'origine
            heroAnimation.style.animation = 'reverse-top-left 0.4s';
            setTimeout(() => {
                heroAnimation.style.height = '20rem';
                heroAnimation.style.width = '20rem';
                heroAnimation.style.backgroundPosition = 'center';
                heroAnimation.style.backgroundSize = 'cover';
                heroAnimation.style.backgroundImage = 'var(--tl-1)'; // Restaure l'image initiale
            }, 400);
    
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


