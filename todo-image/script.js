const body = document.querySelector('body');
let div = document.createElement('div');
div.setAttribute('class','bg-image');
body.append(div)

let heading = document.createElement('h1');
heading.innerText = 'TodoList';
heading.style.color = 'white';
heading.style.textAlign = 'center';
heading.style.padding = '10px'
div.append(heading);

const para = document.createElement('p');
para.innerText = 'Each day I will accomplish one thing on my todo list.';
para.style.color = 'white';
para.style.textAlign = 'center';
div.append(para);

const h4 = document.createElement('h4');
h4.innerText = 'Read a Book';
h4.style.color = 'white';
h4.style.marginTop = '2rem'
div.append(h4);


const bigPara = document.createElement('p');
bigPara.innerText = "I don't think that the human race will survive the next thousand years, unless we spread into space. There are too many accidents that can befall life on a single planet. But I'm an optimist....";
bigPara.style.color = 'white';
bigPara.style.marginTop = '2rem';
div.append(bigPara);

const btnDiv = document.createElement('div');
btnDiv.style.display='flex';
btnDiv.style.justifyContent='center';
btnDiv.style.marginTop='1rem'

const btn = document.createElement('button');
btn.innerHTML='Start';
btn.style.backgroundColor = '#f8c462';
btn.style.color = 'white';
btn.style.padding = '10px 30px';
btn.style.fontSize = "17px"
btn.style.fontWeight='bold';

btnDiv.append(btn)
div.append(btnDiv)

const introPara = document.createElement('p');
introPara.innerText = "Don't skip introduction";
introPara.style.color = 'white';
introPara.style.textDecoration='underline';
introPara.style.textAlign='center';
introPara.style.marginTop = '10px'
div.append(introPara)

