
import React from "react";
import { GrFavorite } from "react-icons/gr"
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"
import { Link } from "react-router-dom";


function Playlist(prop){
const {color, changeColor, like, handleLike} = prop
return (

  <>
      <div className="playlists p-2 mt-lg-3  d-lg-flex d-block">
<Link  style={{ textDecoration: 'none' }} to="/PlaylistPage"><img className="playlist-cover" src={prop.cover}  onClick={prop.handlePlaylist} /></Link>

<div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
<div className="" style={{lineHeight:"10px"}}>
<p style={{color:"#FFFFFF"}}>{prop.title}</p>
<p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Sead Swaddler</p>
<p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
</div>

<div>
<MdOutlineFavoriteBorder className={like ? "" : "d-none"}  onClick={handleLike}style={{color:"#FACD66"}}/>
<MdFavorite className={like ? "d-none" : "d-block"} onClick={handleLike} style={{color:"#FACD66"}}/>
</div>

</div>
</div>

  </>
)

}

export default Playlist
