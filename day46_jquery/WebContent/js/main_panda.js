/**main_panda * */

let imageIndex=0;
let position =0;

const ImageURL=[]
const IMAGE_WIDTH=500;
const btnPreivous = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images= document.querySelector(".images")

function prev(){	
	if(imageIndex >0){	
		btnNext.removeAttribute("disabled")
		position += IMAGE_WIDTH;
		images.style.transform =`translateX(${position}px)`;
		imageIndex = imageIndex -1;
	}
	if(imageIndex ==0){	
		btnPrevious.setAttribute('disabled', 'true')
	}
}

function next(){	
	if(imageIndex <3){	
		btnPrevious.removeAttribute("disabled")
		position += IMAGE_WIDTH;
		images.style.transform =`translateX(${position}px)`;
		imageIndex = imageIndex +1;
		
	}
	if(imageIndex ==3){	
		btnNext.setAttribute('disabled', 'true')
	}	
}

function init(){	
	btnPrevious.setAttribute('disabled', 'true')
	btnPrevious.setAttribute('click', prev)
	btnNext.setAttribute('click',next)
}

init();