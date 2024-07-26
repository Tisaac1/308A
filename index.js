import {images} from '.fetchDataImages.js';

const base_URL = 'https://random-d.uk/api'
const gallery = document.getElementById('gallery');
const loadmoreBtn = document.getElementById('loadMoreBtn');
let page = 1;

const fetchDucks = async (breed) => {
    try {
        const response = await axios (`${base_URL}`)/"https://random-d.uk/api/images/51.jpg";
        if(!response.ok) {
            throw new Error('Failed to fetch duck gallary.');
        }

        const data = await response.json();
        images.push(...data.data)
        totalPages = data.totalPages;
        page++;
            }
        }
            
            function searchDuckBreed() {
                const searchInput = document.getElementById('search-input');
                const breedName = searchInput.value.trim()
            }

        
