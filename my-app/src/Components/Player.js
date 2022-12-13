import {React,useEffect, useState, useRef} from "react";
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiVolumeFull, BiPause} from "react-icons/bi"
import { RiRepeatOneLine } from "react-icons/ri"
import PlayerComp from "./PlayerComp";


function Player(prop){
   const{  currentSongIndex, setCurrentSongIndex, PlayBtnRef,PauseBtnRef, ImageRef, rotate, SetRotate, AudioRef,  AllSongs  } = prop

   const [repeat, SetRepeat] = useState(false)


const progressRef = useRef()

const innerBar = useRef()
const innerVolumeBar = useRef()
const volumeProgressBar = useRef()

    function handlePrev(){

        if(currentSongIndex < 1){
           setCurrentSongIndex(AllSongs.length - 1)
            AudioRef.current.load()
            AudioRef.current.play()
            return
        }
        setCurrentSongIndex(currentSongIndex-1)
              console.log(currentSongIndex)
              AudioRef.current.load()
              AudioRef.current.play()
    }

      function handleNext(){
          if(currentSongIndex > AllSongs.length-2){
            setCurrentSongIndex(0)
            AudioRef.current.load()
            AudioRef.current.play()
            return
          }
           AudioRef.current.load()
           AudioRef.current.play()

      setCurrentSongIndex(currentSongIndex + 1)
    }



    function handlePause(){
        PlayBtnRef.current.style.display = "block"
        PauseBtnRef.current.style.display = "none"
        AudioRef.current.pause()
        SetRotate(true)
    }

    function handlePlay(){
        PauseBtnRef.current.style.display = "block"
        PlayBtnRef.current.style.display = "none"
        AudioRef.current.play()
        SetRotate(false)

    }


   function handleShuffle(){
  setCurrentSongIndex(Math.floor((Math.random() * AllSongs.length)))
  AudioRef.current.load()
  AudioRef.current.play()

   }

   function handleUpdate(){

       const {duration, currentTime} = AudioRef.current
       const progressPercent = (currentTime / duration) * 100
    //    progressRef.current.style.width = `${progressPercent}%`
       innerBar.current.style.width = `${progressPercent}%`

    //    console.log(AudioRef.current.volume)
   }

   function SetProgress(e){
    //    console.log(e.target)
      const width = progressRef.current.clientWidth
       const ClickX = e.nativeEvent.offsetX

       const duration = AudioRef.current.duration

       AudioRef.current.currentTime = (ClickX/width) * duration
    //   console.log(width)
    //   console.log(ClickX)



   }

   function VolumeProgress(e){
       const width = volumeProgressBar.current.clientWidth
       const ClickX = e.nativeEvent.offsetX

       console.log(width)

       const VolumeProgress = (ClickX/width) * 100
       const Volume = (VolumeProgress)/100


        innerVolumeBar.current.style.width = `${VolumeProgress}%`
        AudioRef.current.volume = Volume

   }

   function handleRepeat(){
    SetRepeat(!repeat)

   }



     let PlayerCard
            if(prop.PlayerData){
                 PlayerCard = prop.PlayerData.map((item)=>{
                return (
                  <PlayerComp
                  Cover={item.cover}
                  SongTitle={item.title}
                  Artist={item.artist}
                  Audio={item.audio}
                  PlayerRef={prop.ForwardedRef}
                  PlayBtnRef={prop.PlayBtnRef}
                  PauseBtnRef={prop.PauseBtnRef}
                  />
                )
            })
            }




    return (
        <>
        {/* <div className={AllSongs.length > 0 ? "d-block" : "d-none"}> */}
{


        <div className="w-100  p-2 d-flex justify-content-between align-items-center player">

           <div className="d-flex">
                       <audio ref={AudioRef} loop={repeat ? true : false}   onTimeUpdate={handleUpdate}>
        <source className="audio" src={ AllSongs.length > 0 && AllSongs[currentSongIndex].audio} type="audio/mp3"></source>

    </audio>
               {/* {popular.length > 0 && popular[currentSongIndex].title} */}
        <img ref={ImageRef} className={ rotate ? "releases player-img" : "releases player-img play" } src={AllSongs.length > 0 && AllSongs[currentSongIndex].cover } ></img>
        <div className="ms-2 mt-2 player-title " style={{fontSize:"12px"}}>
        <p>{AllSongs.length  && AllSongs[currentSongIndex].artist } </p>
          {AllSongs.length && AllSongs[currentSongIndex].title }
        </div>

        </div>

        <div className="nav-btns gap-4 d-flex flex-column">
            <div className="d-flex gap-2 gap-lg-5">
            <button onClick={handleShuffle} className=" mobile nav-btns shuffle"><BiShuffle/></button>
            <button onClick={handlePrev}  className="  mobile nav-btns back"><BiSkipPrevious/></button>
            <button onClick={handlePlay}  ref={PlayBtnRef} className="  nav-btns play"><BiPlay/></button>
            <button onClick={handlePause} ref={PauseBtnRef} className="  nav-btns pause"><BiPause/></button>
            <button onClick={handleNext} className=" nav-btns next"><BiSkipNext/></button>
            <button onClick={handleRepeat} className=" mobile  nav-btns repeat"><RiRepeatOneLine style={{color: repeat ? "#FACD66" : ""}}/></button>
            </div>
            <div ref={progressRef} onClick={(e)=>SetProgress(e)} className="progress-bar mobile ">
                <div ref={innerBar} className="progress"></div>
            </div>
        </div>

        <div className="volume d-flex gap-3 align-items-center">
            <button className="nav-btns volume"><BiVolumeFull/></button>
            <div  onClick={(e)=>VolumeProgress(e)} ref={volumeProgressBar} className="progress-bar mobile volume-progressBar">
            <div ref={innerVolumeBar} className="progressV"></div>
            </div>
        </div>
        </div>

}
        {/* </div> */}
        </>
    )
}

export default Player

