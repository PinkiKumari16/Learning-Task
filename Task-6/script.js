let happy = true;
let UnHappyUrl = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
let happyUrl = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";


let div = document.createElement('div');
div.style.height = '5em';
div.style.width = '20vw';
div.style.backgroundImage = `url(${happyUrl})`;
div.style.backgroundSize = 'contain';
div.style.margin = '10px';
div.style.backgroundRepeat = 'no-repeat';

document.body.prepend(div);

let btn = document.getElementById('changeBtn');
btn.style.padding = '0.5em';
btn.style.fontSize = '1em'
btn.style.fontWeight = 'bold';
btn.style.backgroundColor = "#0000ff";
btn.style.color = '#ffffff';


let emogiChange = () =>{
    happy = !happy;
    if (!happy){
        div.style.backgroundImage = `url(${UnHappyUrl})`;
        btn.innerText = 'Happy';
    }
    else{
        div.style.backgroundImage = `url(${happyUrl})`;
        btn.innerText = 'Un-Happy';
    }
}