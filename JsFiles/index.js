
import {GamesData} from "./APIs/games.js";
import {DispalyData ,DisplayDetails} from "./ui.js"
import {GamesDetails} from "./APIs/details.js"

let gameWillAdd =document.querySelector('#gameWillAdd');
let links =document.querySelectorAll('.nav-link')
let closeBtn =document.querySelector('#closeBtn');

let gamesSection=document.querySelector('#games')
let LoaderSection=document.querySelector('#Loader')
let gameDetails=document.querySelector('#gameDetails')

let gameDetailWillAdd =document.querySelector('#gameDetailWillAdd')




start()


async function start(){
    LoaderSection.classList.replace('d-none','d-block');
    let testFetch=new GamesData('mmorpg');

    let data =await testFetch.fetchGameByCategory();
    // console.log(data);
    LoaderSection.classList.replace('d-block','d-none');
    goToDisplay(data);
    
}

function goToDisplay (data){
   
    let newDisplay=new DispalyData(data);
    let cartona= newDisplay.display();
    // console.log(cartona);

    gameWillAdd.innerHTML=cartona;


    let cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
    card.addEventListener('click',async()=>{
        console.log(card.id);
        LoaderSection.classList.replace('d-none','d-block');
        let gameDetail=new GamesDetails(card.id) ;
        let fetchGamesDetail =await gameDetail.fetchGameById();
        LoaderSection.classList.replace('d-block','d-none');
        goToDisplayDetails(fetchGamesDetail);


    })


})



}

function goToDisplayDetails(data){
    
  

    let displaygame=new DisplayDetails(data);


    let cartona= displaygame.display();
    gameDetailWillAdd.innerHTML=cartona;
  
    gamesSection.classList.replace('d-block','d-none')
    gameDetails.classList.replace('d-none','d-block')

    closeBtn.addEventListener('click',()=>{
    gameDetails.classList.replace('d-block','d-none')
    gamesSection.classList.replace('d-none','d-block')
})


}

// closeBtn.addEventListener('click',()=>{
//     gameDetails.classList.replace('d-block','d-none')
//     gamesSection.classList.replace('d-none','d-block')
// })




links.forEach((link)=>{
    
    link.addEventListener('click',async ()=>{
        console.log(link.textContent.toLowerCase());
       let category=link.textContent.toLowerCase();

        links.forEach((el)=>{
            el.classList.remove('active');
        })
        link.classList.add('active')
        LoaderSection.classList.replace('d-none','d-block');
        let testFetch=new GamesData(category);

        let data =await testFetch.fetchGameByCategory();
        LoaderSection.classList.replace('d-block','d-none');
        // console.log(data);
        goToDisplay(data);
        

    })
})


