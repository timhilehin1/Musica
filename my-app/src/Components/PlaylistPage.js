import  { React, useEffect, useState } from "react";
import PlaylistSongs from "./PlaylistSongs";
import { BsFillPlayCircleFill} from "react-icons/bs"
import { SiApplemusic } from "react-icons/si"

function PlaylistPage(prop){
     //props drilling
    const {PlaylistData,  PlaylistIndex,  AllSongs, SetAllSongs,  setCurrentSongIndex,  AudioRef, PlayBtnRef, PauseBtnRef,  SetRotate} = prop


  const [SongDuration, SetSongDuration] = useState()
  


   const UpdatedPlaylist = PlaylistData.slice(0,3) //we only need three playlists for the prupose of this project.

   let sum = 0
   let playlist
   if(UpdatedPlaylist.length > 0){
       playlist = UpdatedPlaylist[PlaylistIndex].files //index is responsible for setting each playlist
      for(let i = 0; i<playlist.length; i++){
        sum += parseInt(playlist[i].duration) //loop over array and add all sum together.
      }
   }

   useEffect(()=>{
      SetSongDuration(sum)
   },[])



   function handlePlaylistSong(index){

    AudioRef.current.load()
    AudioRef.current.play()

    PlayBtnRef.current.style.display = "none"
    PauseBtnRef.current.style.display = "block"
    SetRotate(false)



      setCurrentSongIndex(index)
       SetAllSongs(playlist)
   }

   function PlayAll(){
       SetAllSongs(playlist)
       setCurrentSongIndex(0)
       AudioRef.current.load()
       AudioRef.current.play()
       PlayBtnRef.current.style.display = "none"
       PauseBtnRef.current.style.display = "block"
       SetRotate(false)

    AudioRef.current.addEventListener("ended", ()=>{

        setCurrentSongIndex((previndex)=>{

            if(previndex >= 4){
                return 0
            }

            else{
                return previndex + 1
            }
            
        })

        setTimeout(playsongs, 1000)

    })


   }

   function playsongs(){
    AudioRef.current.load()
    AudioRef.current.play()
   }


let playlistSongs
   if(playlist){

     playlistSongs = playlist.map((item,index)=>{
       return (
           <>
           <PlaylistSongs
           key={item.id}
           cover={item.cover}
           duration={item.duration}
           artist={item.artist}
           title={item.title}
           audio={item.audio}
            handlePlaylistSong={()=>handlePlaylistSong(index)}

           />
           </>
       )
   })

   }



    return (
        <>
        <div className="playlist-page w-100 d-block mt-5">

            <div className="Albumimg-cont  d-block d-lg-flex gap-5 align-items-center">
                <div>
            <img className="PlaylistpageCover" src={UpdatedPlaylist.length > 0 && UpdatedPlaylist[PlaylistIndex].cover}></img>
            </div>

            <div className="details mt-2">

            <h2>{UpdatedPlaylist.length > 0 && UpdatedPlaylist[PlaylistIndex].title}</h2>
            <p>{UpdatedPlaylist.length > 0 && UpdatedPlaylist[PlaylistIndex].info}</p>
             <div className="d-flex gap-2">
             <p>{UpdatedPlaylist.length > 0 && UpdatedPlaylist[PlaylistIndex].files.length} Songs </p>
             <p>{SongDuration} mins+</p>
             </div>

             <div className="d-flex gap-2">

              <button className="playall" onClick={PlayAll}> <BsFillPlayCircleFill style={{color:"#FACD66", fontSize:"1.2rem"}}/> Play all</button>
               <button className="playall collection"><SiApplemusic style={{color:"#FACD66", fontSize:"1.2rem"}}/> Add to collection</button>

             </div>
             </div>
            </div>




      <div className="playlist-list">
        {playlistSongs}
        </div>

        </div>


        </>
    )
}

export default PlaylistPage
