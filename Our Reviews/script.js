// import Data from './data.json';
// console.log(Data)

const data = [
    {
        "image" : "./pinki.jpeg" ,
        "name" : "Pinki",
        "professtion" : "FRONT END DEVELOPER",
        "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
    },
    {
        "image" : "./rinki.jpeg" ,
        "name" : "Rinki",
        "professtion" : "FULL STACK DEVELOPER",
        "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
    },
    {
        "image" : "./family.jpeg" ,
        "name" : "Kiran",
        "professtion" : "MAERN END DEVELOPER",
        "content" : "I'am baby meggings health goth +1, Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humlebrag pickled coloring book salvia hoodle, cold-pressed four doliar toast everyday carry."
    }
];

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