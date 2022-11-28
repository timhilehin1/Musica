import React, { useEffect, useState } from "react";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"

function PopularMusic(prop){

    return (
        <>
        <div className="" >
            <img className="releases" src={prop.Cover} onClick={prop.handlePlay}></img>
            <div className="d-flex justify-content-between">
            <div>
           <div className=""  style={{color:"#FFFFFF" , fontSize:".9rem"}}>{prop.Artist}</div>
            <p className="mt-0" style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".9rem"}}>{prop.SongTitle}</p>
            </div>
            {/* <MdOutlineFavoriteBorder className=""  style={{color:"#FACD66"}}/> */}
             <MdFavorite className="mt-4"  style={{color:"#FACD66"}}/>

            </div>
            
            
            </div>

        </>
    )
}


export default PopularMusic
