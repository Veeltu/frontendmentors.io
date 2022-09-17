
const tool = document.getElementById("tool");
const btn = document.getElementById("btn");
const arrow = document.querySelector(".arrow");
const shareBtn = document.querySelector(".share-btn");
// const shareBtnActive = document.querySelector(".share-btn-active");

btn.addEventListener('click', function(){
    tool.classList.toggle('hide');
    arrow.classList.toggle('hide');
    shareBtn.classList.toggle("share-btn-active");
    
})

// btn.addEventListener('click', function(){
//     if( tool.classList.contains('hide')){
//         tool.classList.remove('hide');
//         arrow.classList.remove('hide');
//     }
//     else {
//         tool.classList.add('hide');
//         arrow.classList.add('hide');
//     }
// });

