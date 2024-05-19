let body = document.querySelector('body');
const parentDiv = document.createElement('div');
parentDiv.classList.add('background');
body.appendChild(parentDiv);
let bg = document.querySelector('.background');

// let url1 ='https://i.ibb.co/RbV2JPr/chatbg-1.png';
let url1 = './bg.png';
bg.style.backgroundImage = `url(${url1})`;
bg.style.backgroundSize = 'cover';

bg.style.height = '100vh';


const h1 = document.createElement('h1');
h1.innerText='Chat';
h1.classList.add('heading');
parentDiv.appendChild(h1)
let heading = document.querySelector('.heading');
heading.style.color = '#ffffff';
heading.style.backgroundColor = '#323f4b';
heading.style.fontSize = '30px';
heading.style.textAlign = 'center';
heading.style.fontFamily = 'Roboto';
heading.style.fontWeight = 'bold';
heading.style.padding = '15px';

const childDiv = document.createElement('div');
childDiv.classList.add('whole');
parentDiv.appendChild(childDiv);
let texts = document.querySelector('.whole');
texts.style.padding = '14px';
texts.style.color = '#ffffff';
texts.style.fontFamily = 'Roboto';
texts.style.fontSize = '20px';

let send = 'text-send';
let rev = 'text-rec';
const p1 = document.createElement('p');
p1.classList.add(send);
p1.innerText='Hello, how are you?';
childDiv.appendChild(p1);

const p2 = document.createElement('p');
p2.classList.add(rev);
p2.innerText='Hi Pinki, I am good. How are you?';
childDiv.appendChild(p2);

const p3 = document.createElement('p');
p3.classList.add(send);
p3.innerText="I'm fine. I am learning HTML and CSS";
childDiv.appendChild(p3);

const p4 = document.createElement('p');
p4.classList.add(rev);
p4.innerText='HTML and CSS?';
childDiv.appendChild(p4);

const p5 = document.createElement('p');
p5.classList.add(send);
p5.innerText='Yes, by doing projects parallelly , i am learning it.';
childDiv.appendChild(p5);

const p6 = document.createElement('p');
p6.classList.add(rev);
p6.innerText='Awesome , can you tell how you are learning it';
childDiv.appendChild(p6);

const p7 = document.createElement('p');
p7.classList.add(send);
p7.innerText='can i call you?';
childDiv.appendChild(p7);


let sendTexts = document.querySelectorAll(`.${send}`);
for(let sendText of sendTexts){
    sendText.style.backgroundColor = '#47a3f3';
    sendText.style.padding = '12px';
    sendText.style.borderTopLeftRadius = '12px';
    sendText.style.borderTopRightRadius = '15px';
    sendText.style.borderBottomLeftRadius = '12px';
    sendText.style.textAlign = 'right';

}


let recTexts = document.querySelectorAll(`.${rev}`);
for(let recText of recTexts){
    recText.style.backgroundColor = '#52606d';
    recText.style.padding = '12px';
    recText.style.borderTopLeftRadius = '15px';
    recText.style.borderTopRightRadius = '12px';
    recText.style.borderBottomRightRadius = '12px';

}



