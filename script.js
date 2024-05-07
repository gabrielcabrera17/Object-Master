/*const arr = Object.freeze([1,2,3,4]);
//arr.push(300); // a pesar de que arr se declara con `const`, aún podemos introducir nuevos valores 
/*Si queremos evitar incluso ese tipo de cambios, podemos usar  Object.freeze() para dar a nuestra matriz u objeto la inmutabilidad. 
console.log(arr);

//Spread, Concat, and Slice

const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": "constant language from-rainbow">false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);
  console.log(groceryList);
  const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

  console.log("----------------------");
  console.log(needThyme);
  */
  
const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
/*const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);*/

//Una serie de objetos Pokémon donde la identificación es divisible por 3
const pkmnIds = pokemon.filter(p => p.id % 3 === 0);

console.log(pkmnIds);
 //una serie de objetos Pokémon que son del tipo "fuego"
const tipoFuego = pokemon.filter(p => p.types.includes("fire")).map( p => p.name );
console.log(tipoFuego);
//Una variedad de objetos Pokémon que tienen más de un tipo
const masDeUnTipo = pokemon.filter(p => p.types.length>1);
console.log(masDeUnTipo);
//una matriz con solo los nombres de los Pokémon
const soloNombres = pokemon.map(p => p.name);
console.log(soloNombres);
//Una matriz con solo los nombres de Pokémon con una identificación mayor que 99
const mayoresque99 = pokemon.filter(p => p.id>99).map(p => p.name);
console.log(mayoresque99);
//una matriz con solo los nombres del pokémon cuyo único tipo es veneno
const tipoVeneno = pokemon.filter(p => p.types.length ===1 && p.types.includes("poison")).map( p => p.name );
console.log(tipoVeneno);
//una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const soloVoladores = pokemon.filter(p => p.types.length === 2 && p.types[1]==="flying").map( p => p.types[0] );
console.log(soloVoladores);
//un recuento de la cantidad de pokémon que son de tipo "normal" 
const recuento = pokemon.filter(p => p.types.includes("normal")).length;
console.log(recuento);