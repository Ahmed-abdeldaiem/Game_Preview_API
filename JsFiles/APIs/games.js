




export class GamesData{
    constructor(category){
        this.category=category;
    }
   async fetchGameByCategory(){
    // console.log(this.category);
        let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
let options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b482f6110mshce3ab5f98771440p1642bdjsn277f7ae51e59',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	let response = await fetch(url, options);
	let games = await response.json();
	// console.log(games);
    return games;
} catch (error) {
	console.error(error);
}
    }
}
