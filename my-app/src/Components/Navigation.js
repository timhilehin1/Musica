import React from "react";
import { AiFillHome,  } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import radioLogo from './radio.svg'
import exploreLogo from './video-horizontal.svg'
import { Link } from "react-router-dom";
import { AiOutlineSearch,  AiOutlineMenu  } from "react-icons/ai"
import { MdOutlineRadio, MdVideoLibrary } from "react-icons/md"



let btns = document.querySelectorAll("plx")
console.log(btns)

for(let i = 0; i<btns.length; i++){

    btns[i].addEventListener('click', function(){
    console.log("id")
    })
}

function changeActiveColor(){

}



function Navigation(){
    return (
        <>
          <div className="navigation-bar d-none d-lg-block mt-5  p-2">

         <Link to="/"><div onClick={changeActiveColor} className="home-nav hoverNav plx ">
            <AiFillHome style={{fontSize:"1.5rem"}}/>
            </div>
            </Link>


         <Link to="/Album"><div  onClick={changeActiveColor} className="collections-nav plx ">
       <MdVideoLibrary style={{fontSize:"1.5rem", color:"rgba(255, 255, 255, 0.25)"}}/>
          </div></Link>


              <img src={radioLogo} style={{width:"1.7rem"}}></img>
                <img src={exploreLogo} style={{width:"1.7rem"}}></img>

         <div className="profile-nav  mt-4 ">
            <div>
             <FaUserAlt className="profile-icons" style={{fontSize:"1.2rem", color:"rgba(255, 255, 255, 0.25)"}}/>
             </div>
             <IoLogOutSharp className="mt-3 profile-icons"  style={{fontSize:"1.4rem", color:"rgba(255, 255, 255, 0.25)"}}/>
        </div>

        </div></>
    )

}


export default Navigation
