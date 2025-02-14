// const pokemonData = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//                         .then(response => response.json())
//                         .then(data => console.log(data))
//                         .catch(error => console.error('Error:', error));
                        

// const container = document.getElementById('pokemon-container');

// fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//     .then(response => response.json())
//     .then(data => {
//         const card = document.createElement('div');
//         card.classList.add('pokemon-card'); // Added a class for styling

//         card.innerHTML = `
//             <h2>${data.name.toUpperCase()}</h2>
//             <img src="${data.sprites.front_default}" alt="${data.name}">
//         `;
//         container.appendChild(card);
//     })
//     .catch(error => console.error('Error:', error));

const API_KEY = '638Vypu4mdzeFFiszITVcVO7Mh12zrD3Njb6h7bK'; // Replace with your API key
const roverUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`;

fetch(roverUrl)
    .then(response => response.json())
    .then(data => {
        const photos = data.photos.slice(0, 5); // Get first 5 photos
        const container = document.getElementById('mars-photos');

        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.img_src;
            img.alt = `Mars Rover - ${photo.camera.full_name}`;
            img.style.width = '200px';
            img.style.margin = '10px';
            container.appendChild(img);
        });
    })
    .catch(error => console.error('Error fetching Mars Rover data:', error));
