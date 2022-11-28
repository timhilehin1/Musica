import React from "react";
import logo from '../logo.png';
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineRadio, MdVideoLibrary } from "react-icons/md"
import { AiFillHome,  } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom";


function Searchbar(){
    return (
        <div className="header d-flex gap-2 gap-lg-5 ">
             <button class="btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <AiOutlineMenu style={{ color:"white", fontSize:"1.3rem" }}/>
</button>

<div  style={{width:"50%"}} class="offcanvas holder  bg-dark offcanvas-start " tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    {/* <h5 class="offcanvas-title" id="offcanvasExampleLabel">NEW ARRIVALS</h5> */}
    <button type="button"  class="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>

  <div class="offcanvas-body">
  <Link className="visited-link" to="/"><div className="d-flex gap-4 mt-3">
<AiFillHome style={{fontSize:"1.5rem", color:"#FACD66"}}/>
<p>Home</p>
</div>
</Link>


 <Link className="visited-link" to="/Album"><div className="d-flex gap-4 mt-3">
<AiFillHome style={{fontSize:"1.5rem", color:"rgba(255, 255, 255, 0.25)"}}/>
<p>Collections</p>
</div></Link>

 <div className="d-flex gap-4 mt-3">
<MdOutlineRadio style={{fontSize:"1.5rem",color:"rgba(255, 255, 255, 0.25)"}}/>
<p>Radio</p>
</div>

 <div className="d-flex gap-4 mt-3">
<MdVideoLibrary style={{fontSize:"1.5rem", color:"rgba(255, 255, 255, 0.25)"}}/>
<p>Music videos</p>
</div>

 <div className="d-flex gap-4 mt-3">
<FaUserAlt style={{fontSize:"1.5rem",  color:"rgba(255, 255, 255, 0.25)"}}/>
<p>Profile</p>
</div>

 <div className="d-flex gap-4 mt-3">
<IoLogOutSharp style={{fontSize:"1.5rem", color:"rgba(255, 255, 255, 0.25)"}}/>
<p>Logout</p>
</div>

    </div>

</div>

            <img className="logo" src={logo}></img>
             <div className="searchbar  d-none d-lg-flex gap-3">
                 <AiOutlineSearch style={{fontSize:"1.3rem"}}/>
            Search artists
             </div>
              {/* <AiOutlineSearch className="" style={{fontSize:"1.3rem"}}/> */}
        </div>


    )
}


export default Searchbar
