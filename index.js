import {images} from './fetchImages.js';
import {email} from './validateemail.js';
import axios from 'axios';


const base_URL = 'https://random-d.uk/api'
const gallery = document.getElementById('gallery');
const loadmoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');

let page = 1;


// Call the function to fetch data
fetchData();
// const fetchData = async () => {
//     try {
//         // Make a GET request
//         const response = await fetch(baseURL);const fetchDucks = async (breed) =>   {  }; //Code did not work 
    try {
        const response = await axios.get(`${base_URL}/randomimg?page=${page}`);
            throw new Error('Failed to fetch duck gallary.');
            const data = response.data;
  
    

            const displayImages = () => {
                gallery.innerHTML = images.map(img => `<img src="${img.url}" alt="Duck Image" style="max-width: 100%;">`).join('');
            };
            displayImages();
        
        const Breed = await response.json();
        images.push(...images.data);
        totalPages = data.totalPages;
        page++;
            } catch (error) {
             console.error('Failed to load',error);
            }

            
            function displayBreedsInDropdown() {
                const breedName = searchInput.value.trim()

                if (breedName) {
                    displayBreedInfo(breedName, 'breed-info-4');

                } else {
                    alert('Search for the duck breed!')
                }
                Image.innerHTML = `<img src="${base_URL}" 'https://random-d.uk/api/v2' style="max-width: 100%;">`;
            }
            
    
            //     function handleSearch() {
            //         const searchInput = document.getElementById('searchInput');
            //         searchQuery = searchInput.value.trim();
            //         loadDucks(breedName, searchQuery);
            //     }

            //     loadmoreBtn.addEventListener('click', () => {
            //         fetchDucks();
            //     });
            

            function handleSearch() {
                const searchQuery = searchInput.value.trim();
                if (searchQuery) {
                    fetchDucks(); // Fetch data and filter results based on searchQuery
                } else {
                    alert('Search for the duck breed!');
                }
            }
            
            loadmoreBtn.addEventListener('click', () => {
                fetchDucks();
            })
            searchInput.addEventListener('input', handleSearch);

          
