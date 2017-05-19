let footer=document.querySelector('#card-footer-open');
footer.addEventListener('click', (e)=>{
	e.preventDefault();
	e.target.offsetParent.offsetParent.classList.toggle('footer-open');
	e.target.offsetParent.firstElementChild.classList.toggle('rotate');
});