let marks = document.querySelector('#marks');
let value = 0;
let btn = document.querySelectorAll('.button');

btn.forEach((ele) =>{
    ele.addEventListener('click',()=>{
        let command = ele.id;
        if(command === 'reset'){
            value = 0;
        }
        else if(command === 'decrese'){
            value--;
        }
        else{
            value++;
        }
        if(value>0){
            marks.style.color = 'green';
        }
        else if(value<0){
            marks.style.color = 'red';
        }
        else if(value === 0){
            marks.style.color = 'black';
        }
        marks.textContent = value;
    })
})

