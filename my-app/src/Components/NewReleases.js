import  { React, useState, useEffect, useRef } from "react";
import NewMusic from "./NewMusic";
import { Link } from "react-router-dom";
import { AiOutlinePause } from "react-icons/ai"

function NewReleases(prop){

const{ newRelease, SetnewRelease, currentSongIndex, setCurrentSongIndex, IdChecker,SetIdChecker, PlayBtnRef, PauseBtnRef, ImageRef, rotate, SetRotate, AudioRef, random, SetRandom, AllSongs, SetAllSongs} = prop







   let NewMusicCard
   let newData = []



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



if(newRelease){
   NewMusicCard = newRelease.map((item, index)=>{

        return (
        <>
        {/* { console.log(index)} */}
        <NewMusic
        key={item.id}
        SongTitle={item.title}
        Artist={item.artist}
        Cover={item.cover}
        Audio={item.audio}
        handlePlay = {()=>{handlePlay(item.id, index)}}
        AudioRef={ prop.AudioRef}
        like={"like"}
        handlelike={"handlelike"}


        />
        </>
        )
    })
}
if(newRelease.length > 0){


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


 // for(let i=0; i<newRelease.length; i++){
                    //     if(newRelease[i].id === id){
                    //         // console.log("present")
                    //         let PlayerObject= {
                    //             ...newRelease[i]
                    //         }


                    //     //    {<audio  ref={prop.AudioRef} controls >
                    //     //     <source className="audio" src={audio} type="audio/mp3"></source>

                    //     // </audio>}

                    //     // console.log(prop.AudioRef)
                    //         newData.push(PlayerObject)
                    //         prop.SetPlayerData(newData)
                    //         // console.log(prop.PlayerData)
                    //     }

                    // }

                    //  prop.ForwardedRef.current.classList.add('play')
                    //  prop.PlayBtnRef.current.style.display="none"
                    //  prop.PauseBtnRef.current.style.display="block"
