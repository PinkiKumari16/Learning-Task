let happy = true;
let UnHappyUrl = "https://emojiisland.com/cdn/shop/products/Unhappy_Face_Emoji_Icon_ios10_large.png?v=1571606093";
let happyUrl = "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/65532/happy-emoji-clipart-md.png";


let div = document.createElement('div');
document.body.prepend(div);

let emojiImage = document.createElement('img');
emojiImage.src = `${happyUrl}`;
emojiImage.setAttribute('height','400px')
div.appendChild(emojiImage)

let btn = document.getElementById('changeBtn');
btn.style.padding = '1em';
btn.style.fontSize = '1.5em'
btn.style.fontWeight = 'bold';
btn.style.backgroundColor = "#0000ff";
btn.style.color = '#ffffff';


let emogiChange = () =>{
    happy = !happy;
    if (!happy){
        emojiImage.src = `${UnHappyUrl}`
        btn.innerText = 'Happy';
    }
    else{
        emojiImage.src = `${happyUrl}`;
        btn.innerText = 'Un-Happy';
    }
}