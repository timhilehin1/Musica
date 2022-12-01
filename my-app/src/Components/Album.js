import {React,  useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BsFillPlayCircleFill} from "react-icons/bs"
import PlaylistSongs from "./PlaylistSongs";


function Album(prop){

const {CollectionData, SetCollectionData, FinalPlaylist, SetFinalPlaylist,
SetPlaylistIndex, PlaylistIndex, mine, newRelease, setmine, AllSongs,
 SetAllSongs, setCurrentSongIndex, PlayBtnRef, PauseBtnRef, AudioRef, SetRotate} = prop

// console.log(newRelease)
const [localArray, setLocalArray] = useState([])
const [likeArray, setLikeArray] = useState([])
const [test, setTest] = useState()
const [pageWidth, setPageWidth] = useState(getWindowSize())
let colRef = useRef();
let likeref = useRef();
let likedSongsdiv = useRef();





function getWindowSize() {
  const {innerWidth} = window;
  return innerWidth
}


if(pageWidth > 500 && colRef.current){
     colRef.current.style.display = "flex"
}

else if(pageWidth < 500 && colRef.current){
   colRef.current.style.display = "block"
}

useEffect(()=>{
          setmine(FinalPlaylist)

          function handleWindowResize(){
         setPageWidth(getWindowSize());
          }

          window.addEventListener('resize', handleWindowResize) //add to component lifecycle

          return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
        },[])


useEffect(()=>{

        for(let i = 0; i<FinalPlaylist.length; i++){
            if(FinalPlaylist[i].like === false){
           localArray.push(FinalPlaylist[i])

            }
            else if(FinalPlaylist[i] === true){
             localArray.splice(i,1)
            }

        }

        for(let i=0; i<newRelease.length; i++){
            if(newRelease[i].like === true){
              likeArray.push(newRelease[i])
            }

            else if(newRelease[i] === false){
                likeArray.splice(i,1)
            }
        }


        setTest(localArray)
    },[FinalPlaylist])

// console.log(localArray)
    // useEffect(()=>{

    // },[rel])




function handleCollection(){

        if(pageWidth > 500){
              colRef.current.style.display = "flex"
              likeref.current.style.display = "none"
              likedSongsdiv.current.style.display = 'none'
        }

        else{
             colRef.current.style.display = "block"
             likeref.current.style.display = "none"
             likedSongsdiv.current.style.display = 'none'
        }
    }

function handleLike(){
        colRef.current.style.display = "none"
        likeref.current.style.display = "block"
        likedSongsdiv.current.style.display = 'block'
    }


function handleCollectionPlaylist(id){
    SetPlaylistIndex(id.substr(9)-1)
}

function PlayLikedSong(index){
console.log(index)
}

function handlePlaylistSong(index){
    console.log(index)
    SetAllSongs(likeArray)
    setCurrentSongIndex(index)

    AudioRef.current.load()
    AudioRef.current.play()

    PlayBtnRef.current.style.display = "none"
    PauseBtnRef.current.style.display = "block"
    SetRotate(false)
}

const CollectionComp = localArray.map((item, index)=>{
return (
 <>
<div onClick={()=>handleCollectionPlaylist(item.id)} className= "mt-3 " >
<div className="mt-4  d-lg-flex  gap-4">
<div className="d-block collection-img"  >
<Link style={{ textDecoration: 'none' }} to='/PlaylistPage' > <img  className="releases small-picture  " src={item.cover}></img>  </Link>
<div className="ms-3 title">
{item.title}
{/* <p>{item.title}</p> */}
</div>
</div>
</div>
</div>

</>

)
})

const likedSongs = likeArray.map((item,index)=>{
    return (
         <>
         <PlaylistSongs
           cover={item.cover}
           duration={item.duration}
           artist={item.artist}
           title={item.title}
           audio={item.audio}
        //    PlayLikedSong = {()=>{PlayLikedSong(index)}}
            // AllSongs={AllSongs}
            // SetAllSongs={SetAllSongs}
            handlePlaylistSong={()=>handlePlaylistSong(index)}

           />
         </>
    )
})




return (

<div className="d-block collectionPage">

<div className="mt-5  d-flex button-container gap-lg-5 gap-2">
<button onClick={handleCollection} className="collection btnn">My Collection</button>
<button onClick={handleLike} className="likes btnn">Likes</button>

</div>




<div className="collectionDiv gap-5 px-3 " ref={colRef}>
{CollectionComp}
</div>

<div className="LikedDiv  px-2" ref={likeref}>

    <div className="d-lg-flex d-block gap-5 align-content-center">
    <img className="liked-image mt-2 img-fluid" src="https://media.istockphoto.com/photos/young-pink-hair-girl-listening-music-in-headphones-picture-id1300324580?b=1&k=20&m=1300324580&s=170667a&w=0&h=csNLv_RqHxnWMsuzIIEGqCS_Wz9_OmrGXcOSIiyxwj4="></img>
    <div className="d-block align-self-center">
    <p>Liked Songs</p>
    <p>N of songs in array</p>
    <button className="playall"> <BsFillPlayCircleFill style={{color:"#FACD66", fontSize:"1.2rem"}}/> Play all</button>
    </div>
    </div>



</div>




<div ref={likedSongsdiv} className="LikedDiv">
    {likedSongs}
     </div>


</div>
    )
}

export default Album


     {/* <div className="mt-4 d-lg-flex d-block gap-4"> */}

{/* <div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 14.png')}></img>
<img  className="bigger-picture " src={require('./Images/Rectangle 26.png')}></img>
<div className=" ms-3 title">Limits</div>
</div> */}

{/* <div className="position-relative  collection-img"  ref={Pushref}>
<img  className="releases  small-picture collection-img" src={require('./Images/Rectangle 17.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 27.png')}></img>
<div className=" ms-3 title">Limits</div>
</div> */}

{/* <div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 19.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 28.png')}></img>
<div className=" ms-3 title">Limits</div>
</div> */}


{/* <div className="position-relative collection-img"  ref={Pushref}>
<img  className="releases small-picture collection-img" src={require('./Images/Rectangle 20.png')}></img>
<div className=" ms-3 title">Limits</div>
</div> */}

{/* // */}

{/* <div className="position-relative   liked-collection "  ref={Likeref}>
<img  className="releases  small-picture " src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture" src={require('./Images/Rectangle 26.png')}></img>
<div className=" ms-3 title">Xtra cool</div>
</div> */}

{/* <div className="position-relative  liked-collection  "  ref={Likeref}>
<img   className="releases  small-picture " src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 27.png')}></img>
<div className=" ms-3 title">Patek</div>
</div> */}

{/* <div className="position-relative liked-collection"  ref={Likeref}>
<img className="releases   small-picture" src={require('./Images/Rectangle 15.png')}></img>
<img  className="bigger-picture mt-4 " src={require('./Images/Rectangle 28.png')}></img>
<div className=" ms-3 title">Ototo</div>
</div> */}

{/* <div className="position-relative liked-collection"  ref={Likeref}>
<img  className="releases  small-picture  " src={require('./Images/Rectangle 15.png')}></img>
<div className=" ms-3 title">Joha</div>
</div> */}


     {/* </div> */}
