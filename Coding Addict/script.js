let pages = document.querySelector('.pages');
let icons = document.querySelectorAll('.icon');
let imageIcon = document.querySelector('#ImageIcon');
let header = document.querySelector('.header');
let isPagesShow = false;

window.addEventListener('resize', ()=>{
    console.clear()
    let wid = window.innerWidth;
    console.log(wid)
    if(wid < 700){
        pages.style.display =  'none';
        icons.forEach(ele =>{
            ele.style.display = 'none';
        })
        imageIcon.style.display = 'flex';

    }
    else{
        pages.style.display='';
        icons.forEach(ele =>{
            ele.style.display = '';
        })
        imageIcon.style.display = 'none';
    }

    
})

let createPagesList = () => {
    let pages = ['Home1', 'About', 'Projects', 'Contact'];
    let br = document.createElement('br');
    for(let i=0; i<pages.length; i++){
        let h2 = document.createElement('h2');
        h2.innerText = pages[i];
        header.append(br);
        header.append(h2);

    }
}

imageIcon.addEventListener('click', ()=>{
    isPagesShow = !isPagesShow;
    console.log(isPagesShow);
    if(isPagesShow){
        header.style.height = '15vh';
        createPagesList()

    }
    else{
        header.style.height = '6vh';
    }
})