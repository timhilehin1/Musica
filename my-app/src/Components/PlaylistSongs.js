import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { BiDotsVerticalRounded} from "react-icons/bi"

function PlaylistSongs(prop){

const {AllSongs, SetAllSongs, Plsongs, SetPlSongs} = prop
// console.log(Plsongs)


    function LikeSong(){
        console.log("wagwan")
    }


// console.log(prop.duration)

    return (
        <div className="song-cont">
        <div className="songs mt-3 align-items-center w-100 p-2" onClick={prop.handlePlaylistSong}>
           <div className="d-flex align-items-center gap-1">
               <img className="song-img"  src={prop.cover}></img>
                <MdOutlineFavoriteBorder className="menu d-none d-lg-block" onClick={LikeSong} style={{fontSize:"1.3rem"}}/>
           </div>

           <div className="">
               {prop.title} ~ {prop.artist}
           </div>

           <div className="">
               {/* Mr Money with the Vibe */}
           </div>

           <div className="d-none d-lg-block">
               {prop.duration}
           </div>

           <div className="d-block">
           <BiDotsVerticalRounded className="menu" style={{fontSize:"1.3rem"}}
           />
           <p className="d-block d-lg-none mt-2"> {prop.duration}</p>
           </div>

        </div>




        </div>

    )
}

export default PlaylistSongs
