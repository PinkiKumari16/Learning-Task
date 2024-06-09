let body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';

let div = document.createElement('div');
div.style.backgroundImage = 'url("https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad")';
div.style.height = '100vh';
div.style.width = '30%'
body.appendChild(div)

let divChild = document.createElement('div');
divChild.style.backgroundColor = '#f6c56e';
divChild.style.height = '30vh';
divChild.style.marginTop = '40rem'
divChild.style.borderTopLeftRadius = '15px';
divChild.style.borderTopRightRadius = '15px';
divChild.style.padding = '2px';

let h1 = document.createElement('h1');
h1.innerText = 'Happy Meals';
h1.style.marginLeft = "20px";
h1.style.fontFamily = "Bree Serif";
h1.style.color = '#323f4b';

let para = document.createElement('p');
para.innerHTML = '<h3>Discover the best foods over the 1,000 restaurants</h3>';
para.style.marginLeft = "15px";
para.style.color = '#323f4b';
para.style.fontFamily = "Roboto";


let btn = document.createElement('button');
btn.innerText = "Book Now";
btn.style.backgroundColor = '#ffffff';
btn.style.borderRadius = '5px';
btn.style.border = 'solid white';
btn.style.height = '2.5rem';
btn.style.marginLeft = "15px";
btn.style.fontFamily = "Roboto";

div.appendChild(divChild)
divChild.append(h1)
divChild.append(para)
divChild.append(btn)