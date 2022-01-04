let btns = document.getElementsByClassName('img_bottom');
let lgImg = document.getElementById('lg')
for(let btn of btns)
{
    btn.addEventListener("click",function(){
        lgImg.src = btn.src
    });
}

let amount = document.getElementById('amount').innerHTML = '0';


function funAmount(type) {
    if(type =='plus')
        amount=parseInt(document.getElementById('amount').innerHTML)+1;
    if(type == 'minus' && document.getElementById('amount').innerHTML != 0)
        amount = parseInt(document.getElementById('amount').innerHTML)-1;
return document.getElementById('amount').innerHTML = amount    
}