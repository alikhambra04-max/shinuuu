const tl = gsap.timeline();

tl.to("#shinuu",{
    strokeDashoffset:0,
    duration:4,
    ease:"power2.inOut"
})

.to(".star",{
    opacity:1,
    scale:1.5,
    duration:0.8
},"-=1")

.to("#message",{
    opacity:1,
    duration:1.2
},"-=0.5");

const particles = ["❤️","⭐","✨","💖","💕","💫"];

function createParticle(){

    const p = document.createElement("div");

    p.classList.add("particle");

    p.innerHTML =
    particles[Math.floor(Math.random()*particles.length)];

    p.style.left =
    Math.random()*window.innerWidth + "px";

    p.style.top =
    window.innerHeight + "px";

    document.body.appendChild(p);

    gsap.to(p,{
        y:-window.innerHeight-200,
        x:`+=${Math.random()*200-100}`,
        rotation:360,
        duration:4+Math.random()*3,
        ease:"none",
        onComplete:()=>{
            p.remove();
        }
    });
}

setInterval(createParticle,150);