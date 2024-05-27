const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

let btn = document.querySelector('.btn');
let color = document.querySelector('span');



btn.addEventListener('click', () => {
    let bg = document.body;
    let num = randomNumber()
    bg.style.backgroundColor = colors[num]
    color.textContent = colors[num];

})

let randomNumber = () =>{
    let num = Math.floor(Math.random()*colors.length);
    return num;
}