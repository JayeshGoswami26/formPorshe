const NavigationBarImg = document.getElementById('NavigationBars')
const NavigationButtons = document.querySelectorAll('.NavigationLink')
var BoolNav = true

console.log(NavigationBarImg,NavigationButtons)

NavigationBarImg.addEventListener('click',NoNev())

function NoNev(){
    NavigationButtons.forEach((el)=> {
        if (BoolNav === false){
            el.style.display = "none"
            NavigationBarImg.classList.remove('AnimationNavigation')
        }else{
            el.style.display = "flex"
            NavigationBarImg.classList.add('AnimationNavigation')
        }
    } )
    BoolNav = !BoolNav
    console.log(BoolNav);
}