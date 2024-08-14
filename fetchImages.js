import { breedName } from './index.js';
import { base_URL } from './index.js'; 


async function awaitBreed() {
    try {
        const response = await fetch(`${base_URL}/breeds`);
        if (!response.ok) {
            throw new Error('System is QUACKING up'); 
        }
        return await response.json(); 
    } catch (error) {
        console.error('Error fetching breed data:', error);
        return []; 
    }
}

async function fetchBreedImage(BreedCode) {
    try {
    
        const response = await fetch(`https://random-d.uk/api/images/51.jpg`); 
        if (!response.ok) {
            throw new Error('Failed to fetch breed image');
        }
        const data = await response.json(); 
        return data.imageUrl; 
    } catch (error) {
        console.error('System is QUACKING up:', error);
        return null; 
    }
}

export async function displayBreedsInDropdown(BreedCode) {
    const BreedData = await awaitBreed(); 
    const selectedBreed = BreedData.find(breed => breed.BreedCode === BreedCode);
    
    if (selectedBreed) {
        const BreedImage = await fetchBreedImage(BreedCode); 

        const BreedInfoDiv = document.getElementById('BreedInfo');
        if (BreedInfoDiv) {
            BreedInfoDiv.innerHTML = `
                <h3>${selectedBreed.Homeland}</h3>
                <p>${selectedBreed.description}</p>
                <p><strong>Breed:</strong> ${selectedBreed.ducks}</p>
                <p><strong>URL:</strong> <a href="${selectedBreed.url}" target="_blank">${selectedBreed.url}</a></p>
                ${BreedImage ? `<img src="${BreedImage}" alt="${selectedBreed.fullName} Image">` : ''}
            `;
        } else {
            console.error('Element with ID "BreedInfo" not found.');
        }
    } else {
        console.error('ERROR 501.');
    }
}
