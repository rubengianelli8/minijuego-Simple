const colors = [
	"red", "blue", "green", "yellow", "gray", "pink", "brown", "lightgreen"
];
let seleccionado = "";
const colorSelected = [];
function seleccionarColor() {
	seleccionado = colors[Math.floor(Math.random() * colors.length) ];
	document.querySelector(`.texto`).innerHTML = `<h3>Cuantas veces aparece el color ${seleccionado}</h3>`;

	for (let i = 0; i < 5; i++) {
		let random = Math.floor(Math.random() * colors.length) ;
		document.querySelector(`.n${i}`).style.backgroundColor = colors[random];
		colorSelected.push(colors[random]);
	}	
}
function botones(prop) {
	let cantidad = 0;
	const elemento = document.querySelector(`.textoExito`)
	for(let i = 0; i < 5; i++){
		(seleccionado === colorSelected[i]) ? cantidad++ : null;
	}
	
		(prop === cantidad)
			? elemento.innerHTML = `<p>Correcto</p>`
			: elemento.innerHTML = `<p>Incorrecto</p>`
		
	
}

seleccionarColor();
