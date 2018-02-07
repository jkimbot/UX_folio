
const projectSection = document.querySelector('.projects');
const topOfWindow = projectSection.offsetTop;

function fixName() {
    if(window.scrollY >= topOfWindow) {
        document.body.classList.add('fixed');
    }
    else{
        document.body.classList.remove('fixed');
    }
}

window,addEventListener('scroll', fixName);

