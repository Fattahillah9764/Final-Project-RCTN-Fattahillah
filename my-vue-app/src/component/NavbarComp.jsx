import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Link } from 'react-router-dom';

export default function NavbarComp() {

    const options = [
        { value: 'now_playing', label: 'Now Playing' },
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'popular', label: 'Popular' }
    ];

    const handleOnSelect = (option) => {
        console.log(option.value, "==> INI APA");
    }

    return (
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
                            <li className="nav-item">
                                <Dropdown options={options} onChange={handleOnSelect} value={options[0]} placeholder="Select an option" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
