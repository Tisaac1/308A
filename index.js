import {images} from './fetchImages.js';
import {email} from './validateemail.js'


const base_URL = 'https://random-d.uk/api/randomimg4'
const gallery = document.getElementById('gallery');
const loadmoreBtn = document.getElementById('loadMoreBtn');
let page = 1;

const fetchDucks = async (breed) => {
    try {
        const response = await images.axios (`${base_URL}`) 
            throw new Error('Failed to fetch duck gallary.');
        
        const email = await response.json();
        images.push(...images.email);
        totalPages = email.totalPages;
        page++;
            } catch (error) {
             console.log(error);
            }
};
            
            function searchDuckBreed() {
                const searchInput = document.getElementById('search-input');
                const breedName = searchInput.value.trim()

                if (breedName) {
                    displayBreedInfo(breedName, 'breed-info-0');

                } else {
                    alert('Search for the duck breed!')
                }
                Image.innerHTML = `<img src="${base_URL}" alt="Random Image" style="max-width: 100%;">`;
            }

                function handleSearch() {
                    const searchInput = document.getElementById('search-input');
                    searchQuery = searchInput.value.trim();
                    loadDucks(1, searchQuery);
                }
            

          

          
