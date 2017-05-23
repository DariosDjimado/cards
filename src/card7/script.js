let card=document.querySelector('#card7');

card.addEventListener('click',sendGift,true)


function sendGift(e){
	e.preventDefault();
	this.classList.toggle('selected');
}