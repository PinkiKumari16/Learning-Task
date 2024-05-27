let arr = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
let btn = document.querySelector('.btn');
let color = document.querySelector('span');

let randomNum = () => {
    return Math.floor(Math.random()*arr.length)
}

let hexColorCreator = () => {
    let hexColor = '#';
    for(let i=0; i<6; i++){
        hexColor+=(String(arr[randomNum()]))
    }
    return hexColor;
}

btn.addEventListener('click', ()=>{
    let getColor = hexColorCreator();
    document.body.style.backgroundColor = getColor;
    color.textContent = getColor

})