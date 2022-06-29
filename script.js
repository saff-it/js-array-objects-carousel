const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


const rowWrapper = document.querySelector('.ms_row-cont');
let activeElement = 0;

images.forEach((element, i) => {

    let domContainer = document.createElement('div');
    domContainer.classList.add('col-12', 'w-100', 'ms_carou-img-cont');

    domContainer.innerHTML = `<img src="${element.url}" alt="Svezia">
    <div class="ms_img-text text-end">
        <h2>${element.title}</h2>
        <p>${element.description}</p>
    </div>`;

    rowWrapper.append(domContainer);
    
});


let domImgCont = document.querySelectorAll('div.ms_carou-img-cont');

images.forEach((element, i) => {

    if ( i == activeElement) {
        domImgCont[0].classList.add('active');
    }
    
    console.log(domImgCont);
    
});



const buttonContainer = document.createElement('div');
buttonContainer.classList.add('d-flex', 'justify-content-between');

buttonContainer.innerHTML = `<button class="btn btn-danger w-25 mt-4 ms_btn-prev" >Prev</button>
<button class="btn btn-danger w-25 mt-4 ms_btn-next" >Next</button>`;

rowWrapper.append(buttonContainer);

console.log(buttonContainer);


const buttonNext = document.querySelector('.ms_btn-next');
const buttonPrev = document.querySelector('.ms_btn-prev');
const buttonStart = document.querySelector('.ms_btn-start');
const buttonStop = document.querySelector('.ms_btn-stop');

const clock = setInterval(autoPlay, 3000, domImgCont);


buttonNext.addEventListener('click', function(){

    autoPlay(domImgCont);

});

buttonPrev.addEventListener('click', function(){

    domImgCont[activeElement].classList.remove('active');
    activeElement--;

    if ( activeElement == -1){
        activeElement = images.length -1;
    }

    domImgCont[activeElement].classList.add('active');

});


buttonStop.addEventListener('click', function(){

    clearTimeout(clock);

});

buttonStart.addEventListener('click', function(){

    setInterval(autoPlay, 3000, domImgCont);

});









// FUNCTION

function autoPlay(contentToDisplay) {
    contentToDisplay[activeElement].classList.remove('active');
    activeElement++;

    if ( activeElement == images.length){
        activeElement = 0;
    }

    contentToDisplay[activeElement].classList.add('active');
};