let switchoff = () =>{
    document.querySelector('#bulbImage').src = './bulb-off.webp';
    document.querySelector('#catImage').src = './cat-eyes.webp';
    document.querySelector('.on-switch').style.backgroundColor = '#22c55e';
    document.querySelector('.off-switch').style.backgroundColor = '#cbd2d9';
    document.querySelector('.switch-status').innerText = 'Switched off';

}

let switchon = () =>{
    document.querySelector('#bulbImage').src = './bulb-on.webp';
    document.querySelector('#catImage').src = './cat.webp';
    document.querySelector('.on-switch').style.backgroundColor = '#cbd2d9';
    document.querySelector('.off-switch').style.backgroundColor = '#e12d39';
    document.querySelector('.switch-status').innerText = 'Switched On';

}