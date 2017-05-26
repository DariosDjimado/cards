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
