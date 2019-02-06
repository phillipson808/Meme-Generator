
const imageBox = document.getElementById('imageBox');
const imageBox2 = document.getElementById('imageBox2');
const imageBox3 = document.getElementById('imageBox3');
let button = document.querySelector('button');
let toph1 = document.querySelector('.top');
let bottomh1 = document.querySelector('.bottom');
let top2h1 = document.querySelector('.top2');
let bottom2h1 = document.querySelector ('.bottom2');
let bottom3h1 = document.querySelector('.bottom3');
let top3h1 = document.querySelector('.top3');
let bottomText = document.querySelector('.bottomText');
let topText = document.querySelector('.topText');
let imageurl = document.querySelector('#imageurl');
let killButton = document.querySelector('#kill');
let image = document.querySelector('#imageurl');
let counter = 0;
button.addEventListener('click', getImage);
button.addEventListener('click',getUpperText);
button.addEventListener('click',getLowerText);
killButton.addEventListener('click', reset);



function getImage (){
    if (image.value !== '' && counter === 0){
        imageBox.style.backgroundImage = `url(${image.value})`;
        imageurl.value = '';
        killButton.style.display = 'block';
        imageBox.style.display = 'block';
        counter++;
    
    } else if (image.value !== '' && counter === 1){
        imageBox2.style.backgroundImage = `url(${image.value})`;
        imageurl.value = '';
        killButton.style.display = 'block';
        imageBox2.style.display = 'block';
        counter++;

    } else if (image.value !== '' && counter === 2){
        imageBox3.style.backgroundImage = `url(${image.value})`;
        imageurl.value = '';
        killButton.style.display = 'block';
        imageBox3.style.display = 'block';
        counter++;

    }else if (image.value !== '' && counter > 2){
        alert('You have too many memes!!');
        reset();
        alert ('Your memes have been cleared.');
    }else {
        alert('Where\'s your image!?');     
    }
    
}

function getUpperText(){
    if (counter === 1){ 
        toph1.innerHTML = topText.value.toUpperCase();
        topText.value = '';      
    } else if (counter === 2){
        top2h1.innerHTML = topText.value.toUpperCase();
        topText.value = '';
    } else {
        top3h1.innerHTML = topText.value.toUpperCase();
    }
}

function getLowerText(){
    if (counter === 1){
        bottomh1.innerHTML = bottomText.value.toUpperCase();
        bottomText.value = '';
    } else if (counter === 2){
        bottom2h1.innerHTML = bottomText.value.toUpperCase();
        bottomText.value = '';
    } else{
        bottom3h1.innerHTML = bottomText.value.toUpperCase();
    }
   
}

function reset(){
    counter = 0;
    imageBox.style.display = `none`;
    imageBox2.style.display = `none`;
    imageBox3.style.display = `none`;
    toph1.innerHTML = ``;
    bottomh1.innerHTML = ``;
    top2h1.innerHTML = ``;
    bottom2h1.innerHTML = ``;
    top3h1.innerHTML = ``;
    bottom3h1.innerHTML = ``;
    killButton.style.display = 'none';
    topText.value = '';
    bottomText.value = '';
    imageurl.value = '';
}