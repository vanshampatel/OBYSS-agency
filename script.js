function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotiveAnimation()

function loadingAnimation(){
    var h5timer = document.querySelector(".line1-pt1 h5");
var grow = 0;
var tl = gsap.timeline();

setInterval(function() {
    if (grow < 100) {
        h5timer.innerHTML = grow++;
    } else if (grow === 100) {
        h5timer.innerHTML = grow;
        // Start animation only when counter reaches 100
        tl.to("#loader", {
            delay: 0.4, // Delay before fading out the loader
            opacity: 0,
            duration: 0.4,
        });
    }
}, 30);

tl.from(".line1-pt1",{
    y: 120,
})

tl.from(".line h1, h2", {
    y:120,
    stagger: 0.25,
    duration: 0.3,
});

tl.to("#loader",{
    delay:-1.5,
    duration: 0.5,
    opacity:0
})

tl.from(".page1",{
    y:1000,
    delay:-1,
    opacity:0,
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0,
})

tl.from(".hero-txt h1",{
    y:150,
    stagger: 0.25,
})


}
loadingAnimation()

document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y,
    })
})

Shery.makeMagnet("#nav-pt2 h3", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

 var videoContainer = document.querySelector(".video-cnt")
 var video = document.querySelector(".video-cnt video")
 videoContainer.addEventListener("mouseenter", function(){
videoContainer.addEventListener("mousemove", function(dets){
    gsap.to("#crsr",{
        opacity:0,
    })
    gsap.to("#video-crsr",{
        left:dets.x -550,
        y:dets.y -300,
    })
  })
})
videoContainer.addEventListener("mouseleave",function(){
    gsap.to("#crsr",{
        opacity:1,
    })
    gsap.to("#video-crsr",{
        left:"70%",
        top:"-15%",
    })
})

function videoSec(){
    let flag = 0; // Initial state

videoContainer.addEventListener("click", function () {
    if (flag === 0) {
        // Play the video
        video.play();
        video.style.opacity = 1; // Ensure proper syntax (comma changed to semicolon)
        document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-line"></i>`;
        gsap.to("#video-crsr", {
            scale: 0.5,
            duration: 0.3, // Add animation duration for smooth scaling
            ease: "power1.out"
        });
        flag = 1; // Update flag to indicate video is playing
    } else {
        // Pause the video
        video.pause();
        document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-large-fill"></i>`;
        gsap.to("#video-crsr", {
            scale: 1, // Reset scale back to normal
            duration: 0.3,
            ease: "power1.out"
        });
        flag = 0; // Update flag to indicate video is paused
    }
});

}
videoSec();
function sheryAnimation(){
    Shery.imageEffect(".img-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.63,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.67,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.92,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.29,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}},
        gooey:true,
    })
}
sheryAnimation()

