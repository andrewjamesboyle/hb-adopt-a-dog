import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');


const params = new URLSearchParams(window.location.search);

async function loadData() {
    const data = await getDog(params.get('id'));
    const dogDetails = renderDogDetail(data);
    dogDetailContainer.append(dogDetails);
}

loadData();