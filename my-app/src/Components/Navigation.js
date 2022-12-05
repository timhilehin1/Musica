import React, { useState } from "react";
import { AiFillHome,  } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import radioLogo from './radio.svg'
import exploreLogo from './video-horizontal.svg'
import { Link } from "react-router-dom";
import { AiOutlineSearch,  AiOutlineMenu  } from "react-icons/ai"
import { MdOutlineRadio, MdVideoLibrary } from "react-icons/md"
import { useLocation } from "react-router-dom";




function Navigation(){

    const pathname = useLocation().pathname


    return (
        <>
          <div className="navigation-bar d-none d-lg-block mt-5  p-2">

         <Link to="/"><div className={pathname === '/' ? "home-nav hoverNav" : "home-nav"} >
            <AiFillHome  style={{fontSize:"1.5rem"}}/>
            </div>
            </Link>


         <Link to="/Album"><div className={pathname === '/Album' || pathname === '/LikedPage' ? "home-nav collection-nav hoverNav" : "home-nav collection-nav"}>
       <MdVideoLibrary style={{fontSize:"1.5rem"}}/>
          </div></Link>


              <img src={radioLogo} style={{width:"1.7rem"}}></img>
                <img src={exploreLogo} style={{width:"1.7rem"}}></img>

         <div className="profile-nav  mt-4 ">
            <div>
             <FaUserAlt className="profile-icons" style={{fontSize:"1.2rem", color:"rgba(255, 255, 255, 0.25)"}}/>
             </div>
             <IoLogOutSharp className="mt-3 profile-icons"  style={{fontSize:"1.4rem", color:"rgba(255, 255, 255, 0.25)"}}/>
        </div>

        </div>
        </>
    )

}


export default Navigation
