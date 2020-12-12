const apiKey = '19499412-b0a970c3da683bab1682cc3ad';
const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

// export default {
// searchQuery: '',
// page: 1,

  
export function fetchImages(searchQuery, page=1) {
const url = `${baseUrl}&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`;
return fetch(url)
  .then(response => response.json())
  .then(({hits}) => hits);
}



