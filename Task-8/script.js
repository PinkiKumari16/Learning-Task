let pickes = document.querySelectorAll('.colorBox');
console.log(pickes)

let headingChange = (colorId) => {
    let colorText = document.querySelector('span');
    colorText.innerText = colorId;
}

let setBackground = (colorId) => {
    let background = document.querySelector('.box');
    background.style.backgroundColor = colorId;
    headingChange(colorId)
}


pickes.forEach(color =>{
    color.addEventListener('click', ()=>{
        let colorId = color.innerText;
        setBackground(colorId)
        
    })
})