import React  from 'react';
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiVolumeFull} from "react-icons/bi"
import { RiRepeatOneLine } from "react-icons/ri"
import { AiOutlinePause } from "react-icons/ai"



function PlayerComp(prop){

return (
<>
   <div className="d-flex">
        <img className="releases player-img "  ref={prop.PlayerRef} src={prop.Cover}></img>
        <div className="ms-2 mt-2 player-title " style={{fontSize:"12px"}}>
        <p>{prop.SongTitle}</p>
        {prop.Artist}
        </div>

        </div>

        <div className="nav-btns gap-4 d-flex flex-column">
            <div className="d-flex gap-2 gap-lg-5">
            <button className=" mobile nav-btns shuffle"><BiShuffle/></button>
            <button className="  mobile nav-btns back"><BiSkipPrevious/></button>
            <button className="  nav-btns play" ref={prop.PlayBtnRef}><BiPlay/></button>
            <button className="  nav-btns pause" ref={prop.PauseBtnRef}><AiOutlinePause/></button>
            <button className=" nav-btns next"><BiSkipNext/></button>
            <button className=" mobile  nav-btns repeat"><RiRepeatOneLine/></button>
            </div>
            <div className="progress-bar mobile "></div>
        </div>

        <div className="volume d-flex gap-3 align-items-center">
            <button className="nav-btns volume"><BiVolumeFull/></button>
            <div className="progress-bar mobile volume-progressBar"></div>
        </div>

</>

)}

export default PlayerComp
