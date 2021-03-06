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
card.addEventListener('click',sendGift,true);
function sendGift(e){
	e.preventDefault();
	this.classList.toggle('selected');
}

/** card12 **/
let content=document.querySelectorAll('.card12 .card-content');
for(let i=0; i<content.length;i++){
    content[i].addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(content[i].getAttribute('data-suite-show')==='hidden'){
            content[i].setAttribute('data-suite-show','show');
            content[i].classList.toggle('suite-min');
            let otherContent=document.querySelectorAll('.card12 .suite-min');
            for(let j=0;j<otherContent.length;j++){
                otherContent[j].classList.toggle('suite-show')
            }
        } else{
            content[i].setAttribute('data-suite-show','hidden');
            let otherContent=document.querySelectorAll('.card12 .suite-min');
            for(let j=0;j<otherContent.length;j++){
                otherContent[j].classList.toggle('suite-show')
            }
            content[i].classList.toggle('suite-min');
        }
    },true)
}
