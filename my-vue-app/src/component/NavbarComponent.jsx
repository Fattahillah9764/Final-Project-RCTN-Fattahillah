import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { apiGetMoviesNowPlaying, apiGetMoviesSearch } from "../store/action";
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import { Link } from "react-router-dom"

export default function NavbarComponent () {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    const options = [
        'popular', 'now_playing', 'top_rated'
    ];

    const handleOnSelect = (event) => {
        //console.log(event.target.value, "==> INI APA");
        
        dispatch(apiGetMoviesNowPlaying(event.value))
    };

    const handleSearch = (event) => {
      event.preventDefault(); // Prevent page reload
      if (!searchQuery.trim()) {
        alert("Please enter a search term!");
        return;
      }
      dispatch(apiGetMoviesSearch(searchQuery)); // Dispatch search action
    };    

    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
        <li className="nav-item dropdown">
            <Dropdown options={options} onChange={(event) => handleOnSelect (event)} value={"now_playing"} placeholder="select an option"/>
        </li>
      </ul>
      <form className="d-flex" role="search" onSubmit={(event) => {
  event.preventDefault();
  if (searchQuery.trim()) {
    dispatch(apiGetMoviesSearch(searchQuery));
  } else {
    alert('Please enter a search term!');
  }
}}>
  <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>
      
    </div>
  </div>
</nav>
       </>

    )
    }

