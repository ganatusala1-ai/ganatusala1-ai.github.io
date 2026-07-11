/*=========================
  NICO TECH
==========================*/

// Navbar cambia al hacer scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(5,8,22,.75)";
        header.style.boxShadow = "none";

    }

});


// Animación de aparición

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".card,.project,.about,.hero-card").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// Efecto 3D sobre las tarjetas

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*18;

const rotateX=((y/rect.height)-0.5)*-18;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});


// Hero flotando

const glass=document.querySelector(".glass");

let angle=0;

setInterval(()=>{

angle+=0.01;

glass.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

},16);


// Botones con brillo

document.querySelectorAll(".btn-primary,.btn-nav").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=

`radial-gradient(circle at ${x}px ${y}px,
#60a5fa,
#2563eb)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="#2563eb";

});

});


// Texto escribiéndose

const title=document.querySelector(".hero h1");

const text=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();


// Scroll suave

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Efecto brillo sobre proyectos

document.querySelectorAll(".project").forEach(project=>{

project.addEventListener("mousemove",(e)=>{

const rect=project.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

project.style.background=

`radial-gradient(circle at ${x}px ${y}px,
#60a5fa,
#2563eb,
#7c3aed)`;

});

project.addEventListener("mouseleave",()=>{

project.style.background=

"linear-gradient(135deg,#2563eb,#7c3aed)";

});

});

console.log("🚀 NicoTech cargado correctamente");