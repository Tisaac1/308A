import {images} from './fetchImages.js';
import {email} from './validateemail.js';
import axios from 'axios';


const base_URL = 'https://random-d.uk/api'
const gallery = document.getElementById('gallery');
const loadmoreBtn = document.getElementById('loadMoreBtn');

let page = 1;
const fetchData = async () => {
    try {
        // Make a GET request
        const response = await fetch(baseURL);const fetchDucks = async (breed) =>   {  }; //Code did not work 
    try {
        const response = await axios.got (`${base_URL}?page=${page}`) 
            throw new Error('Failed to fetch duck gallary.');
            const data = response.data;
  
    
// Call the function to fetch data
fetchData();
    
        
        const email = await response.json();
        images.push(...images.data);
        totalPages = data.totalPages;
        page++;
            } catch (error) {
             console.error('Failed to load',error);
            }

            
            function searchDuckBreed() {
                const searchInput = document.getElementById('searchInput');
                const breedName = searchInput.value.trim()

                if (breedName) {
                    displayBreedInfo(breedName, 'breed-info-4');

                } else {
                    alert('Search for the duck breed!')
                }
                Image.innerHTML = `<img src="${base_URL}" 'https://random-d.uk/' style="max-width: 100%;">`;
            }
            
    
                function handleSearch() {
                    const searchInput = document.getElementById('searchInput');
                    searchQuery = searchInput.value.trim();
                    loadDucks(1, searchQuery);
                }

                loadmoreBtn.addEventListener('click', () => {
                    fetchDucks();
                });
            

          

          
