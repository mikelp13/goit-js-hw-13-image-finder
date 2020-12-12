const apiKey = '19499412-b0a970c3da683bab1682cc3ad';
const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

// export default {
// searchQuery: '',
// page: 1,

  
export function fetchImages(inputValue) {
const url = `${baseUrl}&q=${inputValue}&page=${1}&per_page=12&key=${apiKey}`;
return fetch(url)
  .then(response => response.json())
}



