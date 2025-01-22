import React from "react"

export default function CardComponent({original_title, popularity, overview, release_date, poster_path}) {

return (
    <>
    <div className="card m-3" style={{width: "18rem"}}>
  <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Original Title: {original_title}</h5>
    <p className="card-text">Overview: {overview}</p>
    <p className="card-text">Release date: {release_date}</p>
    <p className="card-text">Popularity: {popularity}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
)
}

