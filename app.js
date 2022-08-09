import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

// on load.... write a function to fetch a database, build a detail page for each dog
// fetch all dogs
// render and append all dog cards to the container

async function loadData() {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogCard(dog);


        dogListContainer.append(dogEl);
    }
}

loadData();

