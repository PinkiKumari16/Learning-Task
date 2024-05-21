let switchoff = () =>{
    document.querySelector('#bulbImage').src = 'https://i.ibb.co/BGT8nNM/bulb-go-off-img.png';
    document.querySelector('#catImage').src = 'https://i.ibb.co/tXR1RNY/cat-eyes-img.png';
    document.querySelector('.on-switch').style.backgroundColor = '#22c55e';
    document.querySelector('.off-switch').style.backgroundColor = '#cbd2d9';
    document.querySelector('.switch-status').innerText = 'Switched off';

}

let switchon = () =>{
    document.querySelector('#bulbImage').src = 'https://i.ibb.co/BwHDN9W/bulb-go-on-img.png';
    document.querySelector('#catImage').src = 'https://i.ibb.co/4MWrYQV/cat-img.png';
    document.querySelector('.on-switch').style.backgroundColor = '#e12d39';
    document.querySelector('.off-switch').style.backgroundColor = '#cbd2d9';
    document.querySelector('.switch-status').innerText = 'Switched On';

}