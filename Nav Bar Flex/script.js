let sideIcon = document.querySelector('#SideIcon');
let navBar = document.querySelector('nav');
let isPagesShow = false;

let createPagesList = () => {
    let pages = ['Home', 'About', 'Projects', 'Contact'];
    for(let i=0; i<pages.length; i++){
        let h2 = document.createElement('h2');
        h2.innerText = pages[i];
        navBar.append(h2);

    }
}

sideIcon.addEventListener('click', ()=>{
    sideIcon.classList.toggle('rotate-90');
    isPagesShow = !isPagesShow;
    if(isPagesShow){
        createPagesList()
    }
    else{
        all_pages = navBar.querySelectorAll('h2');
        all_pages.forEach(page => navBar.removeChild(page));
    }

})