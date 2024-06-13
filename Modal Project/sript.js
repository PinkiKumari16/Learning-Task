let isShowModal = false;
let btn = document.querySelector('.btn');
let firstBox = document.querySelector('.center-box');
let secondBox = document.querySelector('.after-show-box');
let body = document.querySelector('body')
let crossBtn = document.querySelector('.cross-icon');


let handleModalProject = ()=>{
    isShowModal = !isShowModal;
    if(isShowModal){
        secondBox.style.display = 'grid'
        body.style.backgroundColor = '#cef5ff'
        // body.style.opacity = '0';
        firstBox.style.opacity = '60%'
        // secondBox.style.opacity = '70%';
        // secondBox.classList.add('after-show-box')
        // firstBox.classList.remove('center-box');
    }
    else{
        secondBox.style.display= 'none';
        // body.style.backgroundColor = '#fff';
        firstBox.style.opacity='100%';
        // secondBox.classList.remove('after-show-box')
    } 
}