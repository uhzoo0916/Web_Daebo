/**main_panda * */


const ImageURL = ["../images/푸바오1.png", "../images/푸바오2.png", "../images/푸바오3.png"];

const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images= document.querySelector(".images")

let index=0;

images.src=ImageURL[index];

btnPrevious.addEventListener('click', ()=>{	
	index = (index -1+ ImageURL.length ) % ImageURL.length ;
	images.src = ImageURL[index];
});


btnNext.addEventListener('click', ()=>{
	console.log("click!");	
	index = (index +1) % ImageURL.length;
	images.src = ImageURL[index];
});