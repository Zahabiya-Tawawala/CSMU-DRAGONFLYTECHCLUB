
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.top = "0";
}
function closemenu() {
  sidemenu.style.top = "-300px";
}



/*----------------------page1-------------------------- */
function loadingAnimationPage1(){
  gsap.from(".page1  img",{
    x:-100,
    opacity:0,
    delay:0.4,
    duration:0.4,

  })
  gsap.from(".page1 .page1_cont .abt_cont",{
    x:100,
    opacity:0,
    delay:0.4,
    duration:0.4
  })
}
loadingAnimationPage1()
/*-----------------------------Page2------------------------- */
function loadingAnimationPage2(){
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".page2 h1",{
    y:100,
    opacity:0,
    delay:0.2,
    duration:0.2,
    scrollTrigger:{
      trigger:".page2 h1"
    }
  })
  gsap.from(".page2 img",{
    scale:1.5,
    opacity:0,
    delay:0.4,
    duration:0.4,
    scrollTrigger:{
      trigger:".page img"
    }
  })
}
loadingAnimationPage2()
/*------------------------------Page3-------------------- */
function loadingAnimationPage3(){
gsap.registerPlugin(ScrollTrigger);
gsap.from(".page3 h1",{
  y:100,
  opacity:0,
  delay:0.4,
  duration:0.4,
  scrollTrigger:{
    trigger:".page3 h1"
  }
})
gsap.from(".page3 .head_profile .p-card",{
  y:-100,
  opacity:0,
  delay:0.5,
  duration:0.5,
  scrollTrigger:{
    trigger:".page3 .head_profile .p-card"
  }
  
})
}
loadingAnimationPage3()

/*---------------------------Page4---------------------- */
 function loadingAnimationPage4(){
  gsap.registerPlugin(ScrollTrigger);
gsap.from(".page4 .team_img",{
  y:-100,
  opacity:0,
  delay:0.4,
  duration:0.4,
  scrollTrigger:{
    trigger:".page4 .team_img"
  }
})
}
loadingAnimationPage4()

/*-----------------------Footer---------------------- */
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