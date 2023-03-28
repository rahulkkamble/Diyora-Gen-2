// ======= SCROLL REVEAL ANIMATION =========
const sr = ScrollReveal({  /* capital S in ScrollReveal */
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 400,
    reset: true   /* for repeat animation */
})

sr.reveal(`.hero-image`)
sr.reveal(`.box-image-inside.f1, .box-image-inside.f3`,{origin: 'right'})
sr.reveal(`.box-image-inside.f2, .without-boy-img`,{origin: 'left'})
sr.reveal(` .boy-img`,{origin: 'right', delay:1000})