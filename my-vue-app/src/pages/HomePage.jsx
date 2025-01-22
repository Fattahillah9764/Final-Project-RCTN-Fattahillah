import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetMoviesNowPlaying, apiGetMoviesSearch} from "../store/action";
import CardComponent from "../component/CardComponent";

export default function HomePage() {
const dataCoba = useSelector(state => state.dataCoba)
const dataMovies = useSelector(state => state.dataMovies)
const dispatch = useDispatch()

useEffect (() => {
    dispatch(apiGetMoviesNowPlaying());
    dispatch(apiGetMoviesSearch())
}, [])

return(
    <>
    <h1>This is Movies List Home Page</h1>
    <div className="row">
    {
        dataMovies.map(el => (
            <CardComponent original_title={el.original_title} popularity={el.popularity} overview={el.overview} release_date={el.release_date} poster_path={el.poster_path}/>
        ))

    }
    </div>
    </>
)
}
