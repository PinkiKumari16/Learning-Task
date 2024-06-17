let isShowModal = false;
let btn = document.querySelector('.btn');
let firstBox = document.querySelector('.center-box');
let secondBox = document.querySelector('.after-show-box');
let modalContent = document.querySelector('.modal-content');
let overLapDiv = document.querySelector('.transparent-background');




let handleModalProject = ()=>{
    isShowModal = !isShowModal;
    if(isShowModal){
        firstBox.style.zIndex = '1';
        overLapDiv.style.display = 'block';
        overLapDiv.style.opacity = '0.6';
        secondBox.style.display = 'grid';
        // secondBox.style.zIndex = '2';

    }
    else{
        secondBox.style.display= 'none';
        overLapDiv.style.display = 'none';
    } 
}