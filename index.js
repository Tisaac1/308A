import {images} from './fetchImages.js';


const base_URL = 'https://random-d.uk/api'
const gallery = document.getElementById('gallery');
const loadmoreBtn = document.getElementById('loadMoreBtn');
let page = 1;

const fetchDucks = async (breed) => {
    try {
        const response = await axios (`${base_URL}`/"https://random-d.uk/api/randomimg");
        if(!response.ok) {
            throw new Error('Failed to fetch duck gallary.');
        }

        const data = await response.json();
        images.push(...data.images);
        totalPages = data.totalPages;
        page++;
            } catch (error) {
             console.log(error);
            }
};
            
            function searchDuckBreed() {
                const searchInput = document.getElementById('search-input');
                const breedName = searchInput.value.trim()

                if (breedName) {
                    displayBreedInfo(breedName, 'breed-info-4');

                } else {
                    alert('Search for the duck breed!')
                }

                function handleSearch() {
                    const searchInput = document.getElementById('search-input');
                    searchQuery = searchInput.value.trim();
                    loadDucks(1, searchQuery);
                }
            }

          

            git push
