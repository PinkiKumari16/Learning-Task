let body = document.querySelector('body');

let div = document.createElement('div');
div.classList.add("bimage");
body.appendChild(div);

let bimage = document.querySelector('.bimage');
let url1 = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/codingbg.png"
// bimage.style.backgroundImage = `url(./white.png)`;
bimage.style.backgroundColor = 'skyblue';
bimage.style.backgroundSize = 'cover';
bimage.style.height = '100vh';
bimage.style.padding = '30px';
bimage.style.borderColor = '#48ee59';
bimage.style.borderWidth = '5px';
bimage.style.borderStyle = 'solid';



let h1 = document.createElement('h1');
h1.innerText = 'Code is more than some bytes in a file';
h1.classList.add('top');
div.append(h1);
let topClass = document.querySelector('.top');
topClass.style.color = 'white';
topClass.style.fortFamily = 'Bree Serif';
topClass.style.backgroundColor = '#00000080';
topClass.style.padding = '15px';
topClass.style.fontSize = '30px';
