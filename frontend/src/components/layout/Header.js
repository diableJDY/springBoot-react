import React from 'react';
import '../../style/loyout/_Header.css';


const Header = () =>{
    return(
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
                <button className="dropbtn">바로가기
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onClick="myFunction()">&#9776;</a>
        </div>
    );
}


export default Header
