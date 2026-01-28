let suggestFriend = document.querySelector("h5");
let addFriend = document.getElementById('addbtn');
let removed = document.getElementById('removedbtn');


let dublleClick = 0;

addFriend.addEventListener('click', ()=>{
    if(dublleClick == 0){
        suggestFriend.innerText = "Friend"
        suggestFriend.style.color = "green"
        addFriend.innerText= "Removed"
        addFriend.style.backgroundColor = "rgb(239, 11, 11)";

        dublleClick = 1;
    }

    else{
        suggestFriend.innerText = "suggest Friend";
        suggestFriend.style.color = "rgb(102, 102, 89)"
        addFriend.innerText= "Add Friend"
        addFriend.style.backgroundColor = "rgb(37, 37, 116)";

        dublleClick = 0;
    }
})









