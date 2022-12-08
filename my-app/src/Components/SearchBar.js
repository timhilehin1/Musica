import React from "react";
import logo from '../logo.png';
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineRadio, MdVideoLibrary } from "react-icons/md"
import { AiFillHome,  } from "react-icons/ai"
import { FaUserAlt } from "react-icons/fa"
import { IoLogOutSharp } from "react-icons/io5"
import { AiOutlineMenu } from "react-icons/ai"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Searchbar(){

    const pathname = useLocation().pathname
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
  <Link  style={{ textDecoration: 'none' }}  to="/"><div className={pathname === "/" ? "d-flex gap-4 mt-3 home-nav hoverNav" : "d-flex gap-4 mt-3 home-nav"}>
<AiFillHome style={{fontSize:"1.5rem"}}/>
<p>Home</p>
</div>
</Link>


 <Link  style={{ textDecoration: 'none' }}  to="/Album"><div className={pathname === "/Album" || pathname === '/LikedPage' ? "d-flex gap-4 mt-3 home-nav hoverNav" : "d-flex gap-4 mt-3 home-nav"}>
 <MdVideoLibrary  style={{fontSize:"1.5rem"}}/>
<p>Collections</p>
</div></Link>

 <div className="d-flex gap-4 mt-3 home-nav">
<MdOutlineRadio style={{fontSize:"1.5rem"}}/>
<p>Radio</p>
</div>

 <div className="d-flex gap-4 mt-3 home-nav">
<MdVideoLibrary style={{fontSize:"1.5rem"}}/>
<p>Music videos</p>
</div>

 <div className="d-flex gap-4 mt-3 home-nav">
<FaUserAlt style={{fontSize:"1.5rem"}}/>
<p>Profile</p>
</div>

 <div className="d-flex gap-4 mt-3 home-nav">
<IoLogOutSharp style={{fontSize:"1.5rem"}}/>
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
