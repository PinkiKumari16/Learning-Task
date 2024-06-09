let buttons = document.querySelectorAll('.button');
let lights = document.querySelectorAll('.bulb');
buttons.forEach((button,ind) => {
    button.addEventListener('click', ()=>{
        let command = button.getAttribute('id');
        if(command === 'stopButton'){
            lights[ind].style.backgroundColor = '#fa3333';
            lights[ind+1].style.backgroundColor = '#4b5069';
            lights[ind+2].style.backgroundColor = '#4b5069';

        }
        else if(command === 'readyButton'){
            lights[ind].style.backgroundColor = 'yellow';
            lights[ind-1].style.backgroundColor = '#4b5069';
            lights[ind+1].style.backgroundColor = '#4b5069';
        }
        else{
            lights[ind].style.backgroundColor = 'green';
            lights[ind-1].style.backgroundColor = '#4b5069';
            lights[ind-2].style.backgroundColor = '#4b5069';
        }
    })
})