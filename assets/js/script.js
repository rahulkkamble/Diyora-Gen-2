// ======= SCROLL REVEAL ANIMATION =========
const sr = ScrollReveal({  /* capital S in ScrollReveal */
    origin: 'bottom',
    distance: '200px',
    duration: 1300,
    reset: false   /* for repeat animation */
})

sr.reveal(`.hero-image`) /* , .get-started-heading, .why-section, .features-heading, .info-table */
sr.reveal(`.box-image-inside.f1, .box-image-inside.f3`,{origin: 'right'})
sr.reveal(`.box-image-inside.f2, .without-boy-img`,{origin: 'left'})
// sr.reveal(`.footer-section`,{origin:'bottom', distance:'60px'})
sr.reveal(` .boy-img`,{origin: 'right', delay:600})

// Counter
var options = {
    useEasing: true, 
    useGrouping: true, 
    separator: ',', 
    decimal: '.', 
};

var counterParent = document.getElementById('unique-id');
var children = counterParent.children;

function countStart(){
$('#unique-id').addClass('active');
    for (var i = 0; i < children.length; i++) {
         var item = document.getElementById(children[i].id).querySelector('.counter');
         var countValue = item.getAttribute('data-value');

        var countUP = new CountUp(item, 0, countValue, 0, 2, options);
        if (!countUP.error) {
            countUP.start();
        }
    }
}

ScrollReveal().reveal('.counter-block', { 
    beforeReveal: countStart
});	