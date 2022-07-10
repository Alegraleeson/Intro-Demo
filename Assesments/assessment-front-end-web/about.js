console.log("hello world");



let complimentList = document.querySelectorAll('.comp');
let cat = document.querySelector('img');

console.log(complimentList);

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!");;
}

function compliment(evt){
	alert(`you have good taste`)
	// for(let i=0; i<complimentList.length; i++){
		

	// }
	
	

}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

cat.addEventListener('mouseover', compliment);