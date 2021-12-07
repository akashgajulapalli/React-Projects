import React, { useState, useRef, useEffect } from "react";
import logo from "./../logo.svg";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";

const NavBar = () => {
  const [showLinks , setShowLinks ] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const handleClick = () => {
    setShowLinks(!showLinks)    
  }

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = "0px"
    }
  },[showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {
              (links.length > 0)
              ?links.map((item) => {
                const {id , url , text } = item;
                return <li key = {id}>
                   <a href={url}>{text}</a>
                </li>
              })
              :null
            }
          </ul>
        </div>
        <ul className="social-icons">
          {
            (social.length > 0)
            ?social.map((item) => {
              const {id , url , icon} = item;
              return <li key = {id}>
                <a href={url}>{icon}</a>
              </li>
            })
            :null
          }
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
