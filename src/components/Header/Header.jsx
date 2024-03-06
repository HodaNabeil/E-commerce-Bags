import { Link, NavLink } from "react-router-dom";

import "./header.css";
import { useEffect, useState } from "react";
function Header() {

   const [openNav,setOpenNav]=useState(false);
   const [activeLinke,setActiveLinke] =useState("Home");



   useEffect(()=> {
    const handleClikOutSide =(e)=> {
      if(openNav) {
        if(!e.target.closest(".nav-links") && !e.target.closest(".menu-icon") ){
          setOpenNav(false)
        }
      }
    }
    window.addEventListener("click",handleClikOutSide);
    return ()=> {
      window.removeEventListener("click",handleClikOutSide)
    }
   },[openNav])
  const Links = [
    { linkname: "Home", to: "/" },
    { linkname: "Shop", to: "/products" },
    { linkname: "About", to: "/about" },
    { linkname: "Contact", to: "/contact" },
  ];

  function handleactiveLinke(link) {
    setActiveLinke(link)
  }
  function Toggle() {
    setOpenNav(!openNav);
  }
  return (
    <header className="header ">
      <Link to={"/"} className="logo font-2 ">
        Luxury Line
      </Link>
      <nav>
        <ul className={`nav-links ${openNav === true? "show" :""}`}>
          {Links.map((link, index) => {
            return (
              <li 
              
              key={index} >
                <NavLink 
                  onClick={()=> {
                    handleactiveLinke(link.linkname)
                  }}
                 to={link.to} 
                 className={`nav-link ${openNav ===true ? "show" :""}`}>
                  {link.linkname}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="icon-links">
        <Link to={"/account"}>
          <i className="fa-regular fa-user"></i>
        </Link>
        <Link to={"/favorites"}>
          <div className=" relative">
            <i className="fa-regular fa-heart"></i>
            <span className="icon-number">10</span>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className=" relative">
            <i className="fa-solid fa-basket-shopping"></i>
            <span className="icon-number">0</span>
          </div>
        </Link>
        <div
        onClick={Toggle}
        className=" menu-icon">
          <span  className={`   ${ openNav=== true ? "active-menu" : ""}`}></span>
          <span  className={`   ${ openNav=== true ? "active-menu" : ""}`}></span>
          <span  className={`   ${ openNav=== true ? "active-menu" : ""}`}></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
