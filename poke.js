const container = document.getElementById('pikachu');


const url =  "https://pokeapi.co/api/v2/pokemon/";
const arr =[];

fetchPokemons();

async function fetchPokemons () {
    try{
        for (i=1; i<=50; i++){    
            let resp = await fetch(url + i);
            let data = await resp.json();
            
            var pokemons = {
                name: data.name,
                id: data.id,
                ability: data.abilities[0].ability.name,
                image: data.sprites["front_default"],
                move: data.moves[0].move.name,
                weight: data.weight,
            };
            arr.push(pokemons);
            pokemonCard(arr);
        }
            console.log(arr); 
        }
            catch (error) {
            console.log('Error fetching Pokemon details');
            }
        }

        function pokemonCard(arr) {
            const pokemonHTMLString = arr.map((result) => `
            <li class="card">
                <img class="card-image" src="${result.image}"/>
                <h2 class="card-title">${result.id}. ${result.name}</h2>
                <p class="ability">Ability: ${result.ability} 
                <p class="ability">Move: ${result.move} 
                <p class="card-subtitle">Weight: ${result.weight}</p>
            </li>
        `
           )
            .join('');
            container.innerHTML = pokemonHTMLString;
        }

    

    //         function pokemonCard(arr) {
    //         console.log(arr);
         
    //         const x  = arr.map((result) =>{

    //         let row = document.createElement("div");
    //         row.setAttribute("class", "row");

    //         let col = document.createElement("div");
    //         col.setAttribute('class', 'col-3 mb-3');
            
    //         let card = document.createElement("div");
    //         card.setAttribute("class", "card h-100");

    //         let cardImg = document.createElement("img");
    //         cardImg.setAttribute("class", "card-title");
    //         cardImg.setAttribute("src", result.image);

    //         let cardBody = document.createElement('p');
    //         cardBody.setAttribute("class", "ability");
    //         p.innerHTML = result.ability[0];

    //         let para = document.createElement('p');
    //         card.setAttribute("class", "card-subtitle");
    //         p.innerHTML = result.weight;

    //         card.append(cardImg, cardBody, para);
    //         col.append(card);

    //         row.append(col);
    //         container.append(row);
            
    //         }
    //  )};
