import {React, useRef, useState} from "react";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"

function NewMusic(prop){
    // console.log(prop.index)

    const Audioref = useRef()
    const [IsPlaying, setIsPlaying] = useState(false)
    // console.log(Audioref.current)
    // Audio.play()

    return (
        <>


           <div className="">
            <img className="releases" src={prop.Cover} onClick={prop.handlePlay}></img>
            <div className="d-flex justify-content-between">
            <div className="">
           <div className=""  style={{color:"#FFFFFF" , fontSize:".9rem"}}>{prop.Artist}{prop.index}</div>
            <p className="mt-0" style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".9rem"}}>{prop.SongTitle}</p>
            </div>
            {/* <MdOutlineFavoriteBorder className=""  style={{color:"#FACD66"}}/> */}
             <MdFavorite className="mt-4"  style={{color:"#FACD66"}}/>
             </div>
            </div>

        </>
    )
}

export default NewMusic

    {/* <Link to ="/Album"> <img className="releases" src={require('./Images/Rectangle 14.png')}></img></Link> */}

     {/* <img className="releases" src={require('./Images/Rectangle 14.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 17.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 18.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 19.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 20.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 14.png')}></img>
            <img className="releases" src={require('./Images/Rectangle 14.png')}></img> */}
