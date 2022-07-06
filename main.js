function handleMouseClick(event){
    clickedCard = document.getElementById(event.target.parentElement.id);
    clickedCard.classList.toggle('flipped');
}

Array.from(document.getElementsByClassName("card")).forEach(
    (card)=>{
        card.addEventListener("click",handleMouseClick)
    }
);


