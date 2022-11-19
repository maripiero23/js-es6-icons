[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];




const dataCard = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},

	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let containerCard = document.querySelector(".container-card");

const selectEl = document.getElementById("categoria");

//creiamo una funzione chiamata stampacard 
//stringaFiltro non é altro che il valore che abbiamo passato in un altra
// funzione, cioé abbiamo invocato la funzione stampaCard nell'addeventlistener
//e gli abbiamo passato come argomento il valore di una variabile!!
function stampaCard(stringaFiltro) {
	
	
//creiamo un ciclo for per creare le card
for (let i = 0; i < dataCard.length; i++) {
	//non é altro che l'oggetto per intero con le sue proprietà
	const cardData = dataCard[i];
	//se il valore di stringafiltro ricordandoci che é il valore
	// scelto dall'utente é === ad una proprietà type dell'oggetto
	////////////////////////////////////oppure a all come stringa
	if(stringaFiltro === cardData.type || stringaFiltro === "all"){

	
	//creiamo il div
	let col = document.createElement("div");
	//aggiungo la classe
	col.classList.add("col-2", "mt-5");

	//creiamo la card
	let card = document.createElement("div");
	//aggiungo le classi
	card.classList.add("card", "d-flex", "justify-content-center", "align-items-center");
	//inserisco come stringa l'icona all'html
	card.innerHTML = `<i class="${cardData.prefix}${cardData.name} ${cardData.family} ${cardData.color}"></i>`;
	
	//appendo la col al containerCard
	containerCard.append(col);
	//appendo alla col la card
	col.append(card);
	} 
}
}

//al cambio della select prendiamo il valore di essa
selectEl.addEventListener("change", function(){

	//dichiariamo una costante con il valore della select
	const valoreSelect = selectEl.value;

	//svuotiamo il contenitore 
	containerCard.innerHTML = "";

	//INVOCO la funzione di sopra StampaCard
	// passando come parametro il valore selezionato dell'utente
	//nella variabile valoreSelect.
	stampaCard(valoreSelect)

});

//invoco la funzione fuori da tutto e metto dentro una stringa con 
// valore "all" ci servirà per la condizione (se stringaFiltro é === a "all")
//allora stampa tutto sulla pagina html
stampaCard("all");