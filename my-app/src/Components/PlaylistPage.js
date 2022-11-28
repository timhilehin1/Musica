import  { React, useEffect, useState } from "react";
import PlaylistSongs from "./PlaylistSongs";
import { BsFillPlayCircleFill} from "react-icons/bs"
import { SiApplemusic } from "react-icons/si"
import { useLocation } from "react-router-dom";

function PlaylistPage(prop){

    const {PlaylistData, SetPlaylistData,  SetPlaylistIndex, PlaylistIndex, color, changeColor, Appref, AllSongs, SetAllSongs, Plsongs, SetPlSongs, currentSongIndex, setCurrentSongIndex,  AudioRef, PlayBtnRef, PauseBtnRef, rotate, SetRotate, playListID, setplayListID} = prop

    // const [Plsongs, SetPlSongs] = useState([])
  // const path = useLocation().pathname;
  // const location = path.split("/")[1];

  // console.log(location)
  const [SongDuration, SetSongDuration] = useState()




   const UpdatedPlaylist = PlaylistData.slice(0,3)
   console.log(UpdatedPlaylist)

//    console.log(UpdatedPlaylist)
   let sum = 0
   let demo
   if(UpdatedPlaylist.length > 0){
       demo = UpdatedPlaylist[PlaylistIndex].files
      //  let duration = UpdatedPlaylist[PlaylistIndex].files
      //  console.log(duration)
      // demo.forEach((item)=>{
      //  sum += item.duration

      // })

      for(let i = 0; i<demo.length; i++){
        sum += parseInt(demo[i].duration)
      }

    //   console.log(sum)
    //    console.log(Plsongs)
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
       SetAllSongs(demo)
       console.log(AllSongs)
    //    console.log(index)
   }



let demoSongs
   if(demo){

     demoSongs = demo.map((item,index)=>{
       return (
           <>
           <PlaylistSongs
           cover={item.cover}
           duration={item.duration}
           artist={item.artist}
           title={item.title}
           audio={item.audio}
            AllSongs={AllSongs}
            SetAllSongs={SetAllSongs}
            handlePlaylistSong={()=>handlePlaylistSong(index)}

           />
           </>
       )
   })

   }

//

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

              <button className="playall"> <BsFillPlayCircleFill style={{color:"#FACD66", fontSize:"1.2rem"}}/> Play all</button>
               <button className="playall collection"><SiApplemusic style={{color:"#FACD66", fontSize:"1.2rem"}}/> Add to collection</button>

             </div>
             </div>
            </div>




      <div className="playlist-list  ">
        {demoSongs}
        </div>

        </div>


        </>
    )
}

export default PlaylistPage
