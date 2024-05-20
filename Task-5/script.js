let div = document.querySelector('div');
div.style.margin = '10%';
div.style.border = 'solid silver 5px';
div.style.height = '10rem';
div.style.width = '20rem';
div.style.padding = '1em';

let btn = document.querySelector('button');
btn.style.padding = '0.5em';

let changeHeading = () =>{
    let h1 = document.querySelector('h1');
    if (h1.innerText === 'Web Technologies'){
        h1.innerText = '4.0  Technologies';
        h1.style.color = 'Blue';
    }
    else{
        h1.innerText = 'Web Technologies';
        h1.style.color = 'black';
    }
    
}