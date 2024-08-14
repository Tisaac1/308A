
import { breedName } from './index.js';
import { base_URL } from '.index.js';

export async function displayBreedsInDropdown(BreedCode) {
    const BreedData = awaitBreed();
    const selectedBreed = BreedData.find(Breed => Breed.BreedCode === BreedCode);

    async function awaitBreed() {
        try {
            const response = await fetch(`${base_URL}/breeds`); // Adjust endpoint based on your API
            if (!response.ok) {
                throw new Error('System is QUACKING up');
            }
        
    
    if (selectedBreed) {
        const BreedImage = await 'https://random-d.uk/api/http/100.jpg'(BreedCode);

        const BreedInfoDiv = document.getElementById('BreedInfo');
        BreedInfoDiv.innerHTML = `
        <h3>${selectedBreed.Homeland}</h3>
        <p>${selectedBreed.description}</p>
        <p><strong>breed:</strong> ${selectedBreed.ducks}</p>
        <p><strong>URL:</strong> <a href="${selectedBreed.url}" target="_blank">${base_URL}</a></p>
        ${BreedImage ? `<img src="${base_URL}" alt="${selectedBreed.fullName} Image">` : ''}
        `;
        } else {
            console.error('Selected Breed data not found.')
        }
}
    