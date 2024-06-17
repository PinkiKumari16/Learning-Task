let isShowModal = false;
let btn = document.querySelector('.btn');
let firstBox = document.querySelector('.center-box');
let secondBox = document.querySelector('.after-show-box');
let modalContent = document.querySelector('.modal-content');
let overLapDiv = document.querySelector('.transparent-background');




let handleModalProject = ()=>{
    isShowModal = !isShowModal;
    if(isShowModal){
        overLapDiv.style.display = 'grid';

    }
    else{
        overLapDiv.style.display = 'none';
    } 
}