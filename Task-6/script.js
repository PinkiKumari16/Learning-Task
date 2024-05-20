let happy = true;
let btn = document.getElementById('changeBtn');
btn.style.padding = '0.5em';
btn.style.fontSize = '1em'
btn.style.fontWeight = 'bold';
btn.style.backgroundColor = "#0000ff";
btn.style.color = '#ffffff';

let UnHappyUrl = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
let happyUrl = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";

let emogiChange = () =>{
    happy = !happy;
    let emoji = document.getElementById('happy');

    if (!happy){
        emoji.innerText = "Un-Happy";
        btn.innerText = 'Happy';
    }
    else{
        emoji.innerHTML = 'Happy';
        btn.innerText = 'Un-Happy';
    }
}