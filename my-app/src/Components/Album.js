import {React,  useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";



function Album(prop){


const {FinalPlaylist, SetPlaylistIndex} = prop


const [localArray, setLocalArray] = useState([])
const [test, setTest] = useState()
const [pageWidth, setPageWidth] = useState(getWindowSize())
let colRef = useRef();

let CollectionArray = []






//  Functin returns width of the page
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


// This useEffect function gets the width of the webpage and stores it in a statesetter function,then adds an eventlistener that listens for window resize.
useEffect(()=>{
          function handleWindowResize(){
         setPageWidth(getWindowSize());
          }

          window.addEventListener('resize', handleWindowResize) //add to component lifecycle

          return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
        },[])



        // checks if the playlist in homepage is liked. if its likes, gets pushed to an array else gets splced from the array(needs refactoring, visit likedpage for more clarity)
useEffect(()=>{

        for(let i = 0; i<FinalPlaylist.length; i++){
            if(FinalPlaylist[i].like === false){
             CollectionArray.push(FinalPlaylist[i])
             setLocalArray(CollectionArray)

            }
            else if(FinalPlaylist[i] === true){
             CollectionArray.splice(i,1)
             setLocalArray(CollectionArray)
            }

        }


        // setTest(localArray)
    },[FinalPlaylist])





//   deals with responsiveness issues
function handleCollection(){

        if(pageWidth > 500){
              colRef.current.style.display = "flex"
        }

        else{
             colRef.current.style.display = "block"
        }
    }



//    onclick of any playlist that has been liked, set the id of the playlst to the state setter function. The ids carries letters, that's the reason for the substring.
function handleCollectionPlaylist(id){
    SetPlaylistIndex(id.substr(9)-1)
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



return (

// Main Album pag, this page also contains navigation to the lked/library page.
     <>
     { localArray <= 0 ? <div className="d-block">

     <div className="mt-5  d-flex button-container gap-lg-5 gap-2">
<button onClick={handleCollection} className="collection btnn activeBtnn">My Collection</button>
<Link to="/LikedPage"><button  className="likes btnn">Likes</button></Link>

        </div>

          <p className="mt-3">Add a Collection from HomePage</p>

           </div>   :


<div className="d-block collectionPage">

<div className="mt-5  d-flex button-container gap-lg-5 gap-2">
<button onClick={handleCollection} className="collection btnn activeBtnn">My Collection</button>
<Link to="/LikedPage"><button  className="likes btnn">Likes</button></Link>

</div>



<div className="collectionDiv gap-5 px-3 " ref={colRef}>
{CollectionComp}
</div>


</div>


     }



</>
    )
}

export default Album

