// --------------Menu Manipilaton---------------------

const menuIcon = document.getElementById('menuIcon');
const list = document.querySelector('.list');

menuIcon.addEventListener('click', function () {
    if (list.style.display === "none") {
        list.style.display = "block";
        menuIcon.style.transform='rotate(90deg)'
        menuIcon.style.transition='0.5s'
    } else {
        list.style.display = "none";
        menuIcon.style.transform='rotate(0deg)'
        menuIcon.style.transition='0.5s'
    }
});


const MenuCardSectionBreakFast = document.querySelector('.MenuCardSectionBreakFast')
const MorePlatesBtn= document.getElementById('MorePlatesBtn')

MorePlatesBtn.addEventListener('click',function AllCardsBreakFast(){
    MenuCardSectionBreakFast.style.overflow ='visible'
    MenuCardSectionBreakFast.style.height = 'auto';
    MorePlatesBtn.style.display = 'none';
})

const MenuCardSectionLunch = document.querySelector('.MenuCardSectionLunch')
const LunchBtn = document.querySelector('.lunchBtn')

LunchBtn.addEventListener('click',function AllCardsLunch(){
    
    MenuCardSectionLunch.style.overflow ='visible'
    MenuCardSectionLunch.style.height = 'auto';
    LunchBtn.style.display = 'none';
})
const MenuCardSectionDinner = document.querySelector('.MenuCardSectionDinner')
const DinnerBtn = document.querySelector('.dinnerBtn')

DinnerBtn.addEventListener('click',function AllCardsDinner(){
    
    MenuCardSectionDinner.style.overflow ='visible'
    MenuCardSectionDinner.style.height = 'auto';
    DinnerBtn.style.display = 'none';
})

// --------------Menu Manipilaton---------------------
