import {React, useState, useEffect, useRef} from "react";
import PopularMusic from "./PopularMusic";

function Popular(prop){
    const{  setCurrentSongIndex, popular, SetPopular, SetIdChecker, PlayBtnRef, PauseBtnRef, AudioRef,  SetRandom,   SetRotate,  SetAllSongs} = prop

       let PopularCard
    const AudioEl = useRef(null)
    let updatedPopularData = []



       function handlePlay(id,index){

        AudioRef.current.load()
        AudioRef.current.play()
             PlayBtnRef.current.style.display = "none"
                PauseBtnRef.current.style.display = "block"


                SetRotate(false)


        setCurrentSongIndex(index)
             SetRandom(id)
            SetIdChecker(id.substr(0,7)) 

            if(id.substr(0,7)){
                  SetAllSongs(popular) //if id === popular, set array to popular
            }

    
 
    }

    function handleLike(id){
          SetPopular((prevData)=>{
              prevData.forEach((item)=>{
                  if(item.id === id){
                      const updatedData = {
                          ...item,
                          like: !item.like
                      }

                      updatedPopularData.push(updatedData)
                  }

                  else{
                      updatedPopularData.push(item)
                  }

              })

              return updatedPopularData
          })
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
             like={item.like}
             handleLike={()=>handleLike(item.id)}
             handlePlay={()=>{handlePlay(item.id,index)}}/>
            )
        })
    }


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
