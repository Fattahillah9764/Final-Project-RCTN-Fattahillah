import axios from "axios";
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'

export const apiGetMoviesNowPlaying = (paramData = "now_playing") => {

    console.log("AKU TERPANGGIL LAGI DI ACTION");
    
    return async (dispatch) => {
try {
    const data = await axios ({
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${paramData}?language=en-US&page=1`,
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjk2MGMwMDI1ZGQzNzY5ODQ3OWE5ZWEyMThlZTk2YSIsIm5iZiI6MTczNjk5NDk0Mi4xNTI5OTk5LCJzdWIiOiI2Nzg4NzA3ZTFkNGM5MWY2YWM5NzZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7WDyY-_khw-HK9L56XxX7XuSBD3Ww_HdFqCHVs6AVCo'
        }
    });

    console.log(data.data.results, "==> BEFORE");
    dispatch ({
        type: "CHANGE_DATA_MOVIE",
        payload: data.data.results
    })
    

} catch (error) {
    console.log(error);
    
}
    }

};

export const apiGetMoviesSearch = (query) => {
    return async (dispatch) => {
      try {
        console.log('Query yang diterima:', query);
        
        const response = await axios({
          method: 'GET',
          url: `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjk2MGMwMDI1ZGQzNzY5ODQ3OWE5ZWEyMThlZTk2YSIsIm5iZiI6MTczNjk5NDk0Mi4xNTI5OTk5LCJzdWIiOiI2Nzg4NzA3ZTFkNGM5MWY2YWM5NzZjNzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.7WDyY-_khw-HK9L56XxX7XuSBD3Ww_HdFqCHVs6AVCo',
          },
        });
        console.log('Respons dari API:', response.data);
  
        dispatch({
          type: "SET_MOVIES",
          payload: response.data.results,
        });
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };
  };
  
  