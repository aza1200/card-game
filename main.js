var handleMouseClick = (event) =>{
    if (event.target.tagName == "IMG" ){
        clickedCard = document.getElementById(event.target.parentNode.parentNode.id);
    }
    else if(event.target.tagName == "DIV"){
        clickedCard = document.getElementById(event.target.parentNode.id);
    }
    clickedCard.classList.toggle('flipped');
}

Array.from(document.getElementsByClassName("card")).forEach(
    (card)=>{
        card.addEventListener("click",handleMouseClick)
    }
);

async function loadUrls() {
    const imageUrls = []
    for (var i = 0; i < 6; i++) {
        await fetch("https://api.thecatapi.com/v1/images/search")
            .then((response) => response.json())
            .then((data) => {
              imageUrls.push(data[0].url)
            })
    }
    return imageUrls
}

async function main(){
    const imageUrls = await loadUrls()
    console.log(imageUrls);
    const randomArray = ["1","2","3","4","5","6","7","8","9","10","11","12"]
    randomArray.sort(()=>Math.random()-0.5)
    console.log(randomArray,imageUrls)
    await randomArray
    for(var idx = 1 ; idx<=6 ; idx++){
        pairOneId = randomArray[idx*2-1].toString()
        pairTwoId = randomArray[idx*2-2].toString()
        console.log(pairTwoId,pairOneId)

        firstCard = document.getElementById(pairOneId)
        firstCard.classList.add(idx)
        secondCard = document.getElementById(pairTwoId);
        secondCard.classList.add(idx)

        secondCard.querySelector(".back img").setAttribute('src',imageUrls[idx-1]);
        firstCard.querySelector(".back img").setAttribute('src',imageUrls[idx-1]);
    }

}
main()