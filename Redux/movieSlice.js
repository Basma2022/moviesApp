import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  filteredMovies: [],
  // movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.filteredMovies = action.payload;
    },
    filterMovies: (state, action) => {
      if (action.payload === 0) state.filteredMovies = state.movies;
      else
        state.filteredMovies = state?.movies?.filter((item, index) =>
          item?.genreIds?.includes(action.payload),
        );
    },
    searchMovies: (state, action) => {
      state.filteredMovies = state?.filteredMovies?.filter((item, index) =>
        item?.title?.includes(action.payload),
      );
    },
  },
});

export const {setMovies, filterMovies, searchMovies} = movieSlice.actions;
export default movieSlice.reducer;
