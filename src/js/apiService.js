const apiKey = '19499412-b0a970c3da683bab1682cc3ad';
const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';

export default {
  searchQuery: '',
  page: 1,

  fetchImages() {
    const url = `${baseUrl}&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`; // this.query => getter
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.incrementPage;
        return hits;
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    return (this.searchQuery = value);
  },
};
