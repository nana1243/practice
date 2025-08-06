import axios from "axios";

const axiosInstant = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODc1ZmQyZTc4NWRhYmMzZDQ1NGFjMTliNTJhN2UyYyIsIm5iZiI6MTc1NDQzMzQ5Ny45MDEsInN1YiI6IjY4OTI4N2Q5NzQzNTk0YmIxOGYzZWNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QEw236FVnU-bZfAVOIHU1CqHNbeBEQNH45KFB8DWxb4'
    }})


export default axiosInstant;