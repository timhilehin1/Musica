import {React, useState, useEffect, useRef} from "react";
import PopularMusic from "./PopularMusic";

function Popular(prop){
    const{ newRelease, SetnewRelease, currentSongIndex, setCurrentSongIndex, popular, SetPopular, IdChecker,SetIdChecker, PlayBtnRef, PauseBtnRef, AudioRef, random, SetRandom, rotate,  SetRotate, AllSongs, SetAllSongs} = prop

       let PopularCard
    //    let newData = []
    const AudioEl = useRef(null)



       function handlePlay(id,index){

        AudioRef.current.load()
        AudioRef.current.play()
             PlayBtnRef.current.style.display = "none"
                PauseBtnRef.current.style.display = "block"


                SetRotate(false)

// AudioEl.current.play()

        setCurrentSongIndex(index)
        // console.log(currentSongIndex)
             SetRandom(id)
            SetIdChecker(id.substr(0,7))

            if(id.substr(0,7)){
                  SetAllSongs(popular)
            }

        console.log(AllSongs)
        console.log(popular)

        // for(let i = 0; i<Popular.length; i++){
        //    if(Popular[i].id === id){
        //         console.log("it's gone")
        //         let PlayerObject = {
        //             ...Popular[i]
        //         }
        //         newData.push(PlayerObject)
        //         prop.SetPlayerData(newData)
        //    }
        // }
        // console.log(prop.PlayerData)
    }



    if(popular){
        PopularCard = popular.map((item,index)=>{
            return (
             <PopularMusic
             key={item.id}
              SongTitle={item.title}
             Artist={item.artist}
            Cover={item.cover}
           mp3={item.audio}
            handlePlay={()=>{handlePlay(item.id,index)}}/>
            )
        })
    }

    // function LoadSongs(){

    // }
    return (
         <div className="mt-3 ms-lg-5 mt-lg-5">
         <h5>Popular in your area</h5>
         <div className="popular releases-container  d-flex gap-5">

          {PopularCard}

         </div>
        </div>
    )
}





   export default Popular
