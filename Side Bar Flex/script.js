let isSideBarShow = true;
let side_bar = document.querySelector('.sideBar');
let cross_icon = document.querySelector('.crossIcon');
let imageIcon = document.querySelector('.sideIconBox')

let changeSideBar = () =>{
    isSideBarShow = !isSideBarShow;
    
    // console.log(isSideBarShow)
    if(!isSideBarShow){
        side_bar.style.visibility= 'hidden';
    }
    else{
        side_bar.style.visibility='visible';
    }
}

let animationOnCross = ()=>{
    cross_icon.classList.toggle('rotate-360')
    changeSideBar()
}
