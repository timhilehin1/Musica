import React, { useEffect, useState } from "react";
import RandB from './RandB.png';
import Dashboard from "./Dashboard";
import Playlist from "./Playlist";
import { BiTestTube } from "react-icons/bi";
import { BsExclamationSquare } from "react-icons/bs";







function Sidebar(prop){
  const {PlaylistData, SetPlaylistData, SetPlaylistIndex, PlaylistIndex, color, changeColor, FinalPlaylist, SetFinalPlaylist,playListID, setplayListID } = prop

 


useEffect(()=>{


  if(FinalPlaylist.length <= 0){
    SetFinalPlaylist(PlaylistData.slice(0,3).map((item)=>{
      return {...item, like:true}
    }))
    
  }

  else{
    sessionStorage.setItem("data", JSON.stringify(FinalPlaylist))
  }

 

},[FinalPlaylist])







  function handlePlaylist(id){
    // console.log()
       SetPlaylistIndex(id.substr(9)-1)
  }



  const newData = []


function handleLike(id){

    SetFinalPlaylist((prevPlaylist)=>{

      prevPlaylist.forEach((item, index)=>{



       if(item.id === id){

        const UpdatedObj = {
          ...item,
          like:!item.like
        }
          newData.push(UpdatedObj)
       }

       else{
         newData.push(item)
       }

      })

return newData

    })

   }


//    console.log(FinalPlaylist)







let PlaylistList

if(FinalPlaylist){

      PlaylistList = FinalPlaylist.map((item, index)=>{
    return  (
      <>
        <Playlist
        key={item.id}
        cover={item.cover}
        title={item.title}
        info={item.info}
        handlePlaylist={()=>{handlePlaylist(item.id)}}
        color={color}
         changeColor={changeColor}
          handleLike={()=>handleLike(item.id)}
          like={item.like}
          />
      </>
    )
  })

}




    return (
        <>

        <div className="d-flex gap-5 mt-5">
             <div className="row">
            <div className=" col-12 col-lg-8  ">

       <img className="img-fluid dashboard-img" src={RandB}></img>
       </div>


       <div className="col-12 col-lg-4 d-lg-block">

       <div className="Top-Charts mt-5 mt-lg-0  d-lg-block">
           <h5>Top Charts</h5>
           <div className="d-flex playlist-container d-lg-block gap-5">

             {PlaylistList}

      </div>

</div>

       </div>

        </div>
        </div>



        </>
    )
}


export default Sidebar



   {/* <div className="playlists p-2   d-lg-flex d-block">
      <img className="playlist-cover" src={require('./golden.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Golden age of 80s</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Sead Swaddler</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div> */}

       {/* <div className="playlists mt-lg-3 p-2  d-lg-flex d-block ">
      <img className="playlist-cover" src={require('./reggae.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Reggae "n" blues</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Dj Yk mule</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div> */}

       {/* <div className="playlists mt-lg-3 d-block p-2  d-lg-flex d-block ">
      <img className="playlist-cover" src={require('./tomorrows tunes.png')} />

       <div className="mt-2 ms-lg-3 d-flex  justify-content-between" style={{ width:"100%"}}>
        <div className="" style={{lineHeight:"10px"}}>
      <p style={{color:"#FFFFFF"}}>Tomorrow's tunes</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>Qdot</p>
      <p style={{color:"rgba(255, 255, 255, 0.5)", fontSize:".8rem"}}>2:34:25</p>
      </div>
  <GrFavorite/>
        </div>
      </div> */}


//       class Invoice {

//     // client : string,
//     // Price:Number,
//     // Details:Number

//     // constructor(c:string, p: Number, d:Number){
//     //     this.client = c,
//     //     this.Price = p,
//     //     this.Details = d
//     // }



//     // OR

//     constructor(){
//         private client : String,
//         public Price: String,
//         private Details:Number,

//     }
// }

// const InvOne = new Invoice("TIMI", 15, 10)
