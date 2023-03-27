import { API_KEY, API_URL, API_URL_DISCOVER, API_URL_GENRES, API_URL_TRENDING, axiosInstance } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    discover: [],
    trendingWeek:[],
    genres: [],
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies : (state, action) => {
            state.movies = action.payload
        },
        setDiscover: (state, action) => {
            state.discover = action.payload
        },
        setTrendingWeek : (state, action) => {
            state.trendingWeek = action.payload
        },
        setGenre: (state, action) => {
            state.genres = action.payload
        }
    }
})

export const {setMovies, setDiscover, setTrendingWeek, setGenre} = movieSlice.actions

// export const getMovies = () => async(dispatch) => {
//     return new Promise (async (resolve, reject) => {
//         await axiosInstance.get(`${API_URL}${API_KEY}`).then(res =>{
//             console.log(res.data);
//             // resolve(res.data);
//         }).catch(e => reject())
//     });

//     //trending
//     //discover

// }

//discover
export const getDiscover = () => () => {
    return new Promise (async (resolve, reject) => {
        await axiosInstance.get(`${API_URL_DISCOVER}${API_KEY}`).then(res =>{
            // console.log('DISCOVER', res.data.results);
            resolve(res.data.results);
            dispatch(setDiscover(res.data.results))
        }).catch(e => reject())
    });
}

//trending
export const getTrending = () => () => {
    return new Promise (async (resolve, reject) => {
        await axiosInstance.get(`${API_URL_TRENDING}${API_KEY}`).then(res =>{
            // console.log('TRENDING', res.data.results);
            resolve(res.data.results);
            dispatch(setTrendingWeek(res.data.results))
        }).catch(e => reject())
    });
}

//genre list
export const getGenreList = () => () => {
    return new Promise (async (resolve, reject) => {
        await axiosInstance.get(`${API_URL_GENRES}${API_KEY}`).then(res =>{
            resolve(res.data);
            let newGenres = []
            newGenres.push(res.data.genres)
            // console.log('GENRES', newGenres);
            dispatch(setGenre(newGenres))
        }).catch(e => reject())
    });
}

export default movieSlice.reducer