


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.top = "0"
}
function closemenu(){
    sidemenu.style.top = "-300px"
}
var iframe = document.querySelector("iframe");
var image = document.querySelector(".right-col");
function googleform(){
   iframe.style.display = "block"
   if(screen.width <= 600){
    image.style.display = "none"
   } 
}
  
// ---------------------------Page1-------------------------
function lodingAnimation(){
    gsap.from(".page1 .left-col h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.8,
        stager:0.2
    })
    gsap.from(".page1 p",{
        y:90,
        opacity:0,
        delay:0.6,
        duration:0.8,
    })
    gsap.from(".page1  .get_started-btn",{
        y:80,
        opacity:0,
        delay:0.7,
        duration:0.8,
    })
    gsap.from(".page1 .contact_us-btn",{
       y:80,
       opacity:0,
       delay:0.9,
       duration:0.8 
    })
    gsap.from(".page1 .right-col img",{
        x:100,
        opacity:0,
        delay:0.6,
        duration:0.8,
        transation:0.6,
        stager:0.2
    })

}
lodingAnimation()

function loadingAnimationFooter(){
     gsap.registerPlugin(ScrollTrigger);
     gsap.from("footer",{
        x:-1100,
        delay:0.2,
        duration:0.2,
        scrollTrigger:{
            trigger:"footer",
            
        }
     })
}
loadingAnimationFooter()