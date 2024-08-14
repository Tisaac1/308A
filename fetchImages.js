import {email } from './validateemail.js';
import { Breed } from './index.js';

export async function displayBreedsInDropdown(BreedCode) {
    const BreedData = awaitemail();
    const selectedBreed = BreedData.find(Breed => Breed.BreedCode === BreedCode);
    
    if (selectedBreed) {
        const BreedImage = await fetchBreedImage(BreedCode);

        const BreedInfoDiv = document.getElementById('BreedInfo');
        BreedInfoDiv.innerHTML = `
        <h3>${selectedBreed.Homeland}</h3>
        <p>${selectedBreed.description}</p>
        <p><strong>breed:</strong> ${selectedBreed.ducks}</p>
        <p><strong>URL:</strong> <a href="${selectedBreed.url}" target="_blank">${selectedBreed.url}</a></p>
        ${BreedImage ? `<img src="${BreedImage}" alt="${selectedBreed.fullName} Image">` : ''}
        `;
        } else {
            console.error('Selected Breed data not found.')
        }
}
