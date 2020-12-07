const BASE_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1066af0eb8a5037cd726e43f44eb6528';

export function getMovies() {
    return fetch(BASE_URL).then(res => res.json());
}