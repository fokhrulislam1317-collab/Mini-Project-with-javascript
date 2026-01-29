let suggestFriend = document.querySelector("h5");
let addFriend = document.getElementById('addbtn');
let removed = document.getElementById('removedbtn');



function addFriendchange(){
    suggestFriend.innerText= "Friend";
    suggestFriend.style.color= "green";
    addFriend.style.display="none";
}

function removedchange(){
    suggestFriend.innerText= "suggest Friend";
    suggestFriend.style.color= "rgb(102, 102, 89)"
    addFriend.style.display= "inline";
}

addFriend.addEventListener('click',()=>{
    addFriendchange();
})

removed.addEventListener('click',()=>{
    removedchange();
})


// let dublleclick = 0;


// addFriend.addEventListener('click', ()=>{
//     if(dublleclick == 0){
//         suggestFriend.innerText= "Friend";
//          suggestFriend.style.color= "green";
//          addFriend.innerText= "Remove";
//          addFriend.style.backgroundColor= "rgb(247, 2, 2)";


//          dublleclick= 1;

//     }else{
//         suggestFriend.innerText= "Suggest Friend";
//          suggestFriend.style.color= "brown";
//          addFriend.innerText= "Add Friend";
//          addFriend.style.backgroundColor= " rgb(37, 37, 116)";

//          dublleclick = 0;
//     }
// })










