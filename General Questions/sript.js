let questionList = document.querySelectorAll('.list')
let fetchData = () =>{
    return fetch('./answer_data.json').then((res)=>{
        if(res.status !== 200){
            return new Error('Data not fetch');
        }
        return res.json();
    })

}
let createPara = async (ind) => {
    let data = '';
    await fetchData().then((result)=>{
        data = result[ind];
        // console.log(data)
    }).catch(err=>console.log(err))

    let para = document.createElement('p');
    para.classList = 'ans';
    let line = document.createElement('hr');
    para.append(line);
    para.innerText = data;
    para.style.margin = '1em 0 0 0';
    para.style.borderTop = '3px solid black'
    para.style.padding = '1em 0 0 0';
    para.style.textAlign = 'left';
    questionList[ind].appendChild(para);
}


let buttons = document.querySelectorAll('.btn');
buttons.forEach((button,ind)=>{
    button.addEventListener('click',()=>{
        if(button.innerHTML === '+'){
            button.innerHTML = '-';
            createPara(ind)
        }else{
            button.innerHTML = '+';
            let ans = questionList[ind].querySelector('.ans');
            questionList[ind].removeChild(ans);
        } 
        button.classList.toggle('rotate-90')
        
    })
})