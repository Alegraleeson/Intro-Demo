console.log('Connection Sucessful')

let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

function favoriteColor(evt){
	alert(`Pink!`)
}

function favoritePlace(evt){
	alert(`Home!`)
}

function favoriteRitual(evt){
	alert(`Choosing an outfit!`)
}

colorBtn.addEventListener('click', favoriteColor);
placeBtn.addEventListener('click', favoritePlace);
ritualBtn.addEventListener('click', favoriteRitual);