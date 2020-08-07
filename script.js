var tl= gsap.timeline();

tl.from('nav img', {
    y:-30,
    opacity:0,
    ease: 'expo.easeInOut',
    delay: .3
})
.from('nav #links a', {
    stagger:.2,
    y: -40,
    opacity:0,
    ease: 'expo.easeInOut',
    
})
.from('nav>a', {
    
    y: -30,
    opacity:0,
    ease: 'expo.easeInOut',
    
})
.from('#main .elem', {
    stagger:.2,
    y: 30,
    opacity:0,
    ease: 'expo.easeInOut',
    
})
.from('#bigimg img',{
    scale:1.1,
    y:30,
    opacity:0,
    ease: 'expo.easeInOut',
})


gsap.from('#entrylvl .el',{
    scrollTrigger: {
        trigger: '#entrylvl',
        toggleActions: "play pause resume reverse"
    },
    stagger:.4,
    y:30,
    opacity:0,
    ease: 'expo.easeInOut',
    duration:2 
})
gsap.from('#banner .crsel',{
    scrollTrigger: {
        trigger: '#banner',
        toggleActions: "play pause resume reverse"
    },
    delay:2,
    stagger:.4,
    y:50,
    opacity:0,
    ease: 'expo.easeInOut',
    duration:2
})
gsap.from('#brand .brel',{
    scrollTrigger: {
        trigger: '#brand',
        toggleActions: "play pause resume reverse"
    },
    stagger:.2,
    y:50,
    opacity:0,
    ease: 'expo.easeInOut',
    duration:1.5
})

gsap.from('#green .gel',{
    scrollTrigger: {
        trigger: '#green',
        toggleActions: "play pause resume reverse"
    },
    stagger:.8,
    x:-50,
    opacity:0,
    ease: 'expo.easeInOut',
})

var tl2 = gsap.timeline();
tl2.from('#statstext .stel',{
    scrollTrigger: {
        trigger: '#statstext',
        toggleActions: "play pause resume reverse"
    },
    stagger:.5,
    y:30 ,
    opacity:0,
    ease: 'expo.easeInOut',
})
.from('#cards .card',{
    scrollTrigger: {
        trigger: '#cards',
        toggleActions: "play pause resume reverse"
    },
    stagger:.4,
    y:30 ,
    opacity:0,
    ease: 'expo.easeInOut',
})