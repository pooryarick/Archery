const howToBtns = document.querySelectorAll(".btn.howTo")
const howToBows = document.querySelectorAll(".content.howbow")
const howToArrows = document.querySelectorAll(".content.howarrow")

function howToFunction(index) {
    if(index==0){
        for(const howToBow of howToBows) {
            howToBow.classList.add("hidden")
        }
        for(const howToArrow of howToArrows) {
            howToArrow.classList.add("visible")
        }
    } else if(index==1) {
        for(const howToBow of howToBows) {
            howToBow.classList.remove("hidden")
        }
        for(const howToArrow of howToArrows) {
            howToArrow.classList.remove("visible")
        }
    }
}