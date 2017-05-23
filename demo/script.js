/** card  1**/
let footer=document.querySelector('.card1 #card-footer-open');
footer.addEventListener('click', (e)=>{
	e.preventDefault();
	e.target.offsetParent.offsetParent.classList.toggle('footer-open');
	e.target.offsetParent.firstElementChild.classList.toggle('rotate');
});

/** card 2**/
let button=document.querySelector('.card2 .card-body-icons');
button.addEventListener('click',selectArticle,true);
function selectArticle(e){
	e.preventDefault();
	e.stopPropagation();
	this.classList.toggle("checked");
}

/** card7 **/
let card=document.querySelector('#card7');
card.addEventListener('click',sendGift,true)
function sendGift(e){
	e.preventDefault();
	this.classList.toggle('selected');
}