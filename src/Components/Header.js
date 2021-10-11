import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Header(props) {

    let [backgroundColor, setBackgroundColor] = useState('blue');
    const changeColor = () => {
        console.log("hell0 1")
        setBackgroundColor('red')
    }
    const changeColorBlue = () => {
        console.log("hell0 2")
        setBackgroundColor(()=>{ return ('blue')})
    }
    const changeColorRandom = () => {
        console.log("hell0 3")
        setBackgroundColor('black')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white " style={{backgroundColor:backgroundColor}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="my-2">
                        <button id="dynamic" className="bg-white mx-3 rounded-circle shadow border-0 hover-zoom" onClick={changeColor}>
                            Red navbar
                        </button>
                        <button className="bg-light rounded-circle shadow border-0" onClick={changeColorBlue}>
                            Blue navbar
                        </button>
                        <button className="bg-white mx-3 rounded-circle shadow border-0" onClick={changeColorRandom}>
                            Black navbar
                        </button>
                        </li>
                    </ul>
                    {props.searchBar ?<form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: " "}
                </div>
            </div>
        </nav>
    )
}

Header.propTypes ={
    title: PropTypes.string
}

Header.defaultProps ={
    title: "bhai naam daal le kuch" //when we don't pass any title in props then this will appear
}