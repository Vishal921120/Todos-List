import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Header(props) {
    let [backgroundColor, setBackgroundColor] = useState('blue');
    const changeColor = () => {
        setBackgroundColor('red')
    }
    const changeColorBlue = () => {
        setBackgroundColor('blue')
    }
    const changeColorRandom = () => {
        setBackgroundColor('black')
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-white " style={{backgroundColor:backgroundColor}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <button className="bg-white mx-3 rounded-circle shadow border-0" onClick={changeColor}>
                            Red navbar
                        </button>
                        <button className="bg-light rounded-circle shadow border-0" onClick={changeColorBlue}>
                            Blue navbar
                        </button>
                        <button className="bg-white mx-3 rounded-circle shadow border-0" onClick={changeColorRandom}>
                            Black navbar
                        </button>
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