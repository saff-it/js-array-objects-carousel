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

const rowWrapper = document.querySelector('ms_row-cont');

images.forEach((element, i) => {

    let domContainer = document.createElement('div');
    domContainer.classList.add('col-12', 'w-100', 'ms_carou-img-cont');

    domContainer.innerHTML = `<img src="${element[i].url}" alt="Svezia">
    <div class="ms_img-text text-end">
        <h2>${element[i].title}</h2>
        <p>${element[i].description}</p>
    </div>`

    rowWrapper.append(domContainer);

    console.log(element.title, i );
});






/* <div class="col-12 w-100 ms_carou-img-cont">
        <img src="" alt="Svezia">
        <div class="ms_img-text text-end">
            <h2>Argentina</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta maiores repellendus deleniti natus suscipit.</p>
        </div>
    </div>

    <div class="d-flex justify-content-between"  >
        <button class="btn btn-danger w-25 mt-4 ms_btn-prev" >Prev</button>
        <button class="btn btn-danger w-25 mt-4 ms_btn-next" >Next</button>
    </div> */












































// const imgContainer = document.querySelector('div.ms_carou-img-cont');
// const buttonNext = document.querySelector('.ms_btn-next');
// const buttonPrev = document.querySelector('.ms_btn-prev');
// let activeElement = 0;

// console.log(imgContainer);

// for ( let index = 0; index < images.length ; index++ ) {
//     console.log(images[index]);

//     let imgLandscape = document.createElement('img');
//     imgLandscape.classList.add('w-100');
//     imgLandscape.setAttribute('src', images[index]);

//     if (index == activeElement) {
//         imgLandscape.classList.add('active');

//     }  
                
//     imgContainer.append(imgLandscape);      
           
// }

// const imageList = document.querySelectorAll('.ms_carou-img-cont img');

// buttonNext.addEventListener('click', function() {
//     imageList[activeElement].classList.remove('active');

//     activeElement++;

//     if (activeElement === imageList.length){
//         activeElement = 0;
//     }

//     imageList[activeElement].classList.add('active');

// });

// buttonPrev.addEventListener('click', function() {
//     imageList[activeElement].classList.remove('active');

//     activeElement--;

//     if (activeElement === -1){
//         activeElement = imageList.length -1;
//     }

//     imageList[activeElement].classList.add('active');

// });