// --------------Menu Manipilaton---------------------

const menuIcon = document.getElementById('menuIcon');
const list = document.querySelector('.list');

menuIcon.addEventListener('click', function () {
    list.classList.toggle('show')
    menuIcon.style.transform=list.classList.contains('show')?'rotate(90deg)':'rotate(0deg)'
    menuIcon.style.transition='0.5s'
});


const MenuCardSectionBreakFast = document.querySelector('.MenuCardSectionBreakFast')
const MorePlatesBtn= document.getElementById('MorePlatesBtn')

if(MorePlatesBtn){
    MorePlatesBtn.addEventListener('click',function AllCardsBreakFast(){
        MenuCardSectionBreakFast.style.overflow ='visible'
        MenuCardSectionBreakFast.style.height = 'auto';
        MorePlatesBtn.style.display = 'none';
    })
}


const MenuCardSectionLunch = document.querySelector('.MenuCardSectionLunch')
const LunchBtn = document.querySelector('.lunchBtn')


if(LunchBtn){
    LunchBtn.addEventListener('click',function AllCardsLunch(){
        
        MenuCardSectionLunch.style.overflow ='visible'
        MenuCardSectionLunch.style.height = 'auto';
        LunchBtn.style.display = 'none';
    })
}


const MenuCardSectionDinner = document.querySelector('.MenuCardSectionDinner')
const DinnerBtn = document.querySelector('.dinnerBtn')

if(DinnerBtn){
    DinnerBtn.addEventListener('click',function AllCardsDinner(){
        
        MenuCardSectionDinner.style.overflow ='visible'
        MenuCardSectionDinner.style.height = 'auto';
        DinnerBtn.style.display = 'none';
    })
}


// --------------Menu Manipilaton---------------------


const Inputname = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const sendBtn = document.getElementById('sendBtn')
const formMessage = document.getElementById('formMessage')
const nameValidationMsg = document.getElementById('nameValidationMsg')
const emailValidationMsg = document.getElementById('emailValidationMsg')
const messagesValidationMsg = document.getElementById('messagesValidationMsg')

console.log(Inputname);


sendBtn.addEventListener('click', function(e){
    e.preventDefault();
    let valid = true;

    if(!Inputname.value.trim()){
        nameValidationMsg.textContent=' Name should not be Empty'
        nameValidationMsg.style.display='block'
        valid=false
    }else{
        nameValidationMsg.style.display='none'
    }

    if(!email.checkValidity()){
        emailValidationMsg.textContent='Email should be valid'
        emailValidationMsg.style.display='block'
        valid=false
    }else{
        emailValidationMsg.style.display='none'
    }

    if(!message.value.trim()){
        messagesValidationMsg.textContent=' Message should not be Empty'
        messagesValidationMsg.style.display='block'
        valid=false
    }else{
        messagesValidationMsg.style.display='none'
    }

    if(valid){
        formMessage.textContent='Your Message has sent'
        formMessage.style.display='block'
        Inputname.value = '';
        email.value = '';
        message.value = '';
        setTimeout(()=>{
            formMessage.style.display='none'
        },3000)

    }else{

        formMessage.style.display='none'

    }

})
