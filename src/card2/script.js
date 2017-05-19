let button=document.querySelector('.card-body-icons');
button.addEventListener('click',selectArticle,true);

function selectArticle(e){
	e.preventDefault();
	e.stopPropagation();
	this.classList.toggle("checked");
}