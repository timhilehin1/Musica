import {React,  useRef, useState, useEffect} from "react";
import PlaylistSongs from "./PlaylistSongs";
import { Link, useLocation } from "react-router-dom";
import { BsFillPlayCircleFill} from "react-icons/bs"


function LikedPage(prop){

    const { AllSongs, SetAllSongs, setCurrentSongIndex, PlayBtnRef, PauseBtnRef, AudioRef, SetRotate, newRelease,  popular} = prop

    const [likeArray, setLikeArray] = useState([])
    const [reload, setReload] = useState()


      let newLike = []

      useEffect(()=>{
        for(let i=0; i<newRelease.length; i++){
            if(newRelease[i].like === true){
              newLike.push(newRelease[i])
              setLikeArray(newLike)
            }
        }

        for(let i = 0; i<popular.length; i++){
            if(popular[i].like === true){
                newLike.push(popular[i])
                setLikeArray(newLike)
            }
        }


         console.log(likeArray)


      },[])

let demoArray = []
      useEffect(()=>{

           for(let i = 0; i<likeArray.length; i++){
               if(likeArray[i].like !== false){
                 demoArray.push(likeArray[i])
                 setLikeArray(demoArray)
               }
           }

      },[])








        // setReload(likeArray)  //don't really know what this guy is doing





    function handlePlaylistSong(index){
        // console.log(index)
        SetAllSongs(likeArray)
        setCurrentSongIndex(index)

        AudioRef.current.load()
        AudioRef.current.play()

        PlayBtnRef.current.style.display = "none"
        PauseBtnRef.current.style.display = "block"
        SetRotate(false)
    }

    function handlePlayAll(){
        SetAllSongs(likeArray)
        setCurrentSongIndex(0)
        AudioRef.current.load()
        AudioRef.current.play()
        PlayBtnRef.current.style.display = "none"
        PauseBtnRef.current.style.display = "block"
        SetRotate(false)

        AudioRef.current.addEventListener("ended", ()=>{

            setCurrentSongIndex((previndex)=>{
                if(previndex >= likeArray.length-1){
                    return 0
                }

                else {
                    return previndex + 1
                }
            })

            setTimeout(playsongs, 2000)

        })
    }

    function playsongs(){
        AudioRef.current.load()
        AudioRef.current.play()
       }

       let newArray = []
       function unlikeSong(id){


            likeArray.forEach((item)=>{

                if(item.id === id){
                    const UpdatedObj = {
                        ...item,
                        like: false
                    }

                    newArray.push(UpdatedObj)
                }



                else{
                    newArray.push(item)
                    }



            })


             setLikeArray(newArray)

       }





    const likedSongs = likeArray.map((item,index)=>{
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
               unlikeSong={()=>unlikeSong(item.id)}
               />
             </>
        )
    })


    return (

        <>

{likeArray.length <= 0   ?

<div className="d-block"> <div className="mt-5  d-flex button-container gap-lg-5 gap-2">
<Link to="/Album"><button className="collection btnn">My Collection</button></Link>
<button  className="likes btnn activeBtnn">Likes</button>

</div>

<p className="mt-3 text-align-center">You can add songs from the Homepage</p>

</div>  :


<div className="d-block collectionPage">

<div className="mt-5  d-flex button-container gap-lg-5 gap-2">
<Link to="/Album"><button className="collection btnn">My Collection</button></Link>
<button  className="likes btnn activeBtnn">Likes</button>
</div>

<div className="d-lg-flex d-block gap-5 align-content-center">
<img className="liked-image mt-2 img-fluid" src="https://media.istockphoto.com/photos/young-pink-hair-girl-listening-music-in-headphones-picture-id1300324580?b=1&k=20&m=1300324580&s=170667a&w=0&h=csNLv_RqHxnWMsuzIIEGqCS_Wz9_OmrGXcOSIiyxwj4="></img>
<div className="d-block align-self-center">
<p>Liked Songs</p>
{likeArray.length > 0 ? <p>{likeArray.length} Song{ likeArray.length === 1 ? '' : 's'} </p>  : ""}
<button className="playall" onClick={handlePlayAll}> <BsFillPlayCircleFill style={{color:"#FACD66", fontSize:"1.2rem"}}/> Play all</button>
</div>
</div>


<div className="">
{likedSongs}
</div>

</div>

}



        </>

        )

}




export default LikedPage
