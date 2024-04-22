export class GamesDetails{
    constructor(id){
        this.id=id;
    }
   async fetchGameById(){
    // console.log(this.category);
        let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`;
let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b482f6110mshce3ab5f98771440p1642bdjsn277f7ae51e59',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	let response = await fetch(url, options);
	let gameDetails = await response.json();
	// console.log(games);
    return gameDetails;
} catch (error) {
	console.error(error);
}
    }
}




