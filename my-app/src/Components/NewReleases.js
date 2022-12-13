import  { React, useState, useEffect, useRef } from "react";
import NewMusic from "./NewMusic";

function NewReleases(prop){




const{ newRelease, SetnewRelease, setCurrentSongIndex, SetIdChecker, PlayBtnRef,
 PauseBtnRef,  SetRotate, AudioRef,  SetRandom, SetAllSongs} = prop



let NewMusicCard
let updatedNewRelease= []


            function handlePlay(id, index){
                AudioRef.current.load()
                AudioRef.current.play()

                PlayBtnRef.current.style.display = "none"
                PauseBtnRef.current.style.display = "block"
                SetRotate(false)


                  setCurrentSongIndex(index)
                  SetIdChecker(id.substr(0,3))
                  SetRandom(id)

                   if(id.substr(0,3)){
                       SetAllSongs(newRelease)
                   }

            }


            function handleLike(id){
             SetnewRelease((prevData)=>{
                 prevData.forEach((item)=>{
                    if(item.id === id){

                         const updatedData = {
                             ...item,
                             like: !item.like
                         }
                         updatedNewRelease.push(updatedData)
                     }

                     else{
                        updatedNewRelease.push(item)
                         }
                 })

                 return updatedNewRelease
             })
            }



if(newRelease){
   NewMusicCard = newRelease.map((item, index)=>{

        return (
        <>
        <NewMusic
        key={item.id}
        SongTitle={item.title}
        Artist={item.artist}
        Cover={item.cover}
        Audio={item.audio}
        handlePlay = {()=>{handlePlay(item.id, index)}}
        handleLike={()=>handleLike(item.id)}
        like={item.like}
        AudioRef={ prop.AudioRef}



        />
        </>
        )
    })
}



    return (
         <div className="mt-2 ms-lg-5 mt-lg-5">

         <h5>New Releases</h5>
         <div className=" releases-container d-flex gap-5">
         {NewMusicCard}
         </div>
        </div>
    )
}


export default NewReleases


