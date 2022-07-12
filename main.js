var handleMouseClick = (event) =>{
    clickedCard = document.getElementById(event.target.parentElement.id);
    clickedCard.classList.toggle('flipped');
}

Array.from(document.getElementsByClassName("card")).forEach(
    (card)=>{
        card.addEventListener("click",handleMouseClick)
    }
);

const idArray = ["1","2","3","4","5","6","7","8","9","10","11","12"]

for(var i =0 ; i<6 ; i++) {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
            let imageUrl = data[0].url
            idArray.sort(()=> Math.random()-0.5)
        })
}

function shuffleAndDeleteArray(){

}

// async function getImageUrl() {
//     let response = await fetch("https://api.thecatapi.com/v1/images/search")
//     if (response.ok) {
//         let json = await response.json();
//         console.log(json[0].url)
//     } else {
//         alert("HTTP-Error " + response.status)
//     }
// }


