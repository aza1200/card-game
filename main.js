var handleMouseClick = (event) =>{
    clickedCard = document.getElementById(event.target.parentElement.id);
    clickedCard.classList.toggle('flipped');
}

Array.from(document.getElementsByClassName("card")).forEach(
    (card)=>{
        card.addEventListener("click",handleMouseClick)
    }
);

function loadUrls() {
    const imageUrls = []
    for (var i = 0; i < 6; i++) {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
                imageUrls.push(data[0].url)
            })
    }
    return imageUrls
}

async function main(){
    const imageUrls = await loadUrls()
    console.log(imageUrls)
}
main()

// async function getImageUrl() {
//     let response = await fetch("https://api.thecatapi.com/v1/images/search")
//     if (response.ok) {
//         let json = await response.json();
//         console.log(json[0].url)
//     } else {
//         alert("HTTP-Error " + response.status)
//     }
// }


