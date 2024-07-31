// const boxs = document.querySelectorAll('.box');
// boxs.forEach((ele) => {
//     ele.addEventListener('click', () => {
//         let selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes')) || [];
//         // Check if the box is already added based on its ID
//         const boxId = ele.id;
//         if (!selectedBoxes.some(box => box.includes(`id="${boxId}"`))) {
//             selectedBoxes.push(ele.outerHTML);
//             localStorage.setItem('selectedBoxes', JSON.stringify(selectedBoxes));
//         }
//     });
// });

// const addCardBtn = document.getElementById('addCardBtn');
// if (addCardBtn) {
//     addCardBtn.addEventListener('click', () => {
//         const selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes')) || [];
//         if (selectedBoxes.length > 0) {
//             localStorage.setItem('persistentBoxes', JSON.stringify(selectedBoxes));
//             window.location.href = 'addCard.html';
//         } else {
//             alert('No box selected to add.');
//         }
//     });
// }

// document.addEventListener('DOMContentLoaded', (event) => {
//     const addPage = document.querySelector('.add');
//     if (addPage) {
//         const persistentBoxes = JSON.parse(localStorage.getItem('persistentBoxes')) || [];
//         persistentBoxes.forEach(boxHTML => {
//             addPage.innerHTML += boxHTML;
//         });
//     }
// });



// Add box div to selectedBoxes in localStorage when clicked
const boxs = document.querySelectorAll('.box');
boxs.forEach((ele) => {
    ele.addEventListener('click', () => {
        let selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes')) || [];
        const boxId = ele.id;
        if (!selectedBoxes.some(box => box.includes(`id="${boxId}"`))) {
            selectedBoxes.push(ele.outerHTML);
            localStorage.setItem('selectedBoxes', JSON.stringify(selectedBoxes));
        }
    });
});

// Save selectedBoxes to persistentBoxes and navigate to addCard.html when addCardBtn is clicked
const addCardBtn = document.getElementById('addCardBtn');
if (addCardBtn) {
    addCardBtn.addEventListener('click', () => {
        const selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes')) || [];
        if (selectedBoxes.length > 0) {
            localStorage.setItem('persistentBoxes', JSON.stringify(selectedBoxes));
            window.location.href = 'addCard.html';
        } else {
            alert('No box selected to add.');
        }
    });
}

// Load persistentBoxes from localStorage and add them to the .add div when addCard.html is loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const addPage = document.querySelector('.add');
    if (addPage) {
        localStorage.removeItem('persistentBoxes');  // Clear persistentBoxes on page load
        const selectedBoxes = JSON.parse(localStorage.getItem('selectedBoxes')) || [];
        selectedBoxes.forEach(boxHTML => {
            addPage.innerHTML += boxHTML;
        });
        localStorage.setItem('persistentBoxes', JSON.stringify(selectedBoxes));  // Save the current state to persistentBoxes
    }
});
