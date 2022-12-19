import {React, useState, useRef} from "react";
import { BiShuffle, BiSkipPrevious, BiPlay, BiSkipNext, BiVolumeFull, BiPause} from "react-icons/bi"
import { RiRepeatOneLine } from "react-icons/ri"



function Player(prop){
    //prop drilling
   const{currentSongIndex, setCurrentSongIndex, PlayBtnRef,PauseBtnRef, ImageRef, rotate, SetRotate, AudioRef,  AllSongs  } = prop

   const [repeat, SetRepeat] = useState(false)
   const [shuffle, setShuffle] = useState(false)


const progressRef = useRef()

const innerBar = useRef()
const innerVolumeBar = useRef()
const volumeProgressBar = useRef()

function playSongs(){
    AudioRef.current.load()
    AudioRef.current.play()
   }

     //deduct and reset id onclick of backwards button.
    function handlePrev(){
        if(currentSongIndex < 1){
           setCurrentSongIndex(AllSongs.length - 1)
            AudioRef.current.load()
            AudioRef.current.play()
            return
        }

        if(shuffle === true){
        setCurrentSongIndex(Math.floor(Math.random() * AllSongs.length))
        playSongs()
        return
        }

        setCurrentSongIndex(currentSongIndex-1)
              AudioRef.current.load()
              AudioRef.current.play()
    }

      function handleNext(){

          if(shuffle === true){
            setCurrentSongIndex(Math.floor(Math.random() * AllSongs.length))
             playSongs()
             return
           }

          if(currentSongIndex > AllSongs.length-2){
            setCurrentSongIndex(0)
            playSongs()
            return
          }

           playSongs()
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


    //add eventlistener that listens for end of each song and set a random number to the index of the array, play song after 1s.
   function handleShuffle(){
       setShuffle(!shuffle)

        AudioRef.current.addEventListener("ended", ()=>{
            SetRotate(true)
           setCurrentSongIndex((previndex)=>{

                return Math.floor(Math.random() * AllSongs.length)
           })

           setTimeout(playSongs, 1000)

          })


   }




   //toggle states for repeat, if true, set loop attribute to true and vice-versa.
   function handleRepeat(){
    SetRepeat(!repeat)
   }



   function handleUpdate(){

       const {duration, currentTime} = AudioRef.current
       const progressPercent = (currentTime / duration) * 100 
       innerBar.current.style.width = `${progressPercent}%`
   }

   function SetProgress(e){

       const width = progressRef.current.clientWidth
       const ClickX = e.nativeEvent.offsetX

       const duration = AudioRef.current.duration

       AudioRef.current.currentTime = (ClickX/width) * duration //with this calculation, you can click on anywhere on the seekbar and play song

   }

   function VolumeProgress(e){
//vlumes are in 0s and 1s
       const width = volumeProgressBar.current.clientWidth
       const ClickX = e.nativeEvent.offsetX

       const VolumeProgress = (ClickX/width) * 100 //smilar to the calculation in SetProgress
       const Volume = (VolumeProgress)/100  //volumes are either 0s or 1s


        innerVolumeBar.current.style.width = `${VolumeProgress}%` //Sets volume width
        AudioRef.current.volume = Volume 

   }

    //keep track of audio to decide when the cover should be moving or not.
   if(AudioRef.current){
    AudioRef.current.addEventListener("ended", ()=>{
        SetRotate(true)
        PlayBtnRef.current.style.display = "block"
        PauseBtnRef.current.style.display = "none"

    } )

    AudioRef.current.addEventListener("playing", ()=>{
        SetRotate(false)
        PauseBtnRef.current.style.display = "block"
        PlayBtnRef.current.style.display = "none"
    })
   }




//player bar
return (
        <>
        {/* <div className={AllSongs.length > 0 ? "d-block" : "d-none"}> */}
{


        <div className=" me-4  p-2 d-flex justify-content-between align-items-center player">

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
            <button onClick={handleShuffle} className=" mobile nav-btns shuffle"><BiShuffle style={{color: shuffle ? "#FACD66" : ""}}/></button>
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

