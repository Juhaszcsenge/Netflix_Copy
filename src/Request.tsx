const key =  '2a0a8a8083e3d1382579a8a9c505fe9e'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=2a0a8a8083e3d1382579a8a9c505fe9e&language=en-US&page=1`,
  };

  export default requests