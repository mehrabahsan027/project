// tl.to(' #first',{
//     top:'-100%',
//    delay : 2,
//    duration:0.5,
//    ease: "expo.out",

// })

function loader() {
  let tl = gsap.timeline();
  tl.from("#loader h1", {
    opacity: 0,
    delay: 0.3,
    duration: 1,
  });
  tl.to("#loader h1", {
    display: "none",
  });

  tl.to("#loader video", {
    top: "-100%",

    duration: 1,
    ease: "expo.out",
  });

  tl.to("#nav", {
    opacity: 1,
  });
}

loader();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.querySelector('#top button').addEventListener('click',function(){
  scroll.scrollTo(0)
})

let element = document.querySelectorAll('.element')



element.forEach((e)=>{
  e.addEventListener('mouseenter',function(){
    let page2 = document.querySelector('#page2')

    let bgImg = e.getAttribute('data-img')
    console.log(bgImg);
    

    page2.style.backgroundImage = `url(${bgImg})`



   
    

  })

})
