
function handleMouseenter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave () {
    this.classList.remove('s-card--hovered');
        document.body.id = '';

}


function addEventListenersToCard() {
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements)

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseenter)
        card.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCard,false)