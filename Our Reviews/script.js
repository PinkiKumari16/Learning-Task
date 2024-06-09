var data = [];
let fetchData = () =>{
    return fetch('./data.json')
    .then((res)=>{
        if(res.status !== 200){
            throw new Error('data not found');
        }
        return res.json()
    })
}
fetchData()
.then((data1)=>data = data1)
.catch(err=>console.log(err))

let index = 0;
let image = document.querySelector('img');
let userName = document.querySelector('.name');
let profession = document.querySelector('.profession');
let content = document.querySelector('.contant');

let randomInd = () =>{
    return Math.floor(Math.random()*data.length);
}

let setData = (ind) => {
    image.src = data[ind].image;
    userName.textContent = data[ind].name;
    profession.textContent = data[ind].professtion;
    content.textContent = data[ind].content;
}

let button = document.querySelector('.btn');
button.addEventListener('click', ()=>{
    index = randomInd();
    setData(index)

})

let arros = document.querySelectorAll('.arro');
arros.forEach(arro => {
    arro.addEventListener('click',()=>{
        if(arro.id === 'back-arro'){
            if(index===0){
                index = data.length
            }
            --index;
        }
        else{
            index = (++index)%3
        }
         
        setData(index)
    })
});


