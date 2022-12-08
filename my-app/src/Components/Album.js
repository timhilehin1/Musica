import {React,  useRef, useState, useEffect} from "react";
import { Link } from "react-router-dom";



function Album(prop){


const {FinalPlaylist, SetPlaylistIndex} = prop


const [localArray, setLocalArray] = useState([])
const [test, setTest] = useState()
const [pageWidth, setPageWidth] = useState(getWindowSize())
let colRef = useRef();







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


        setTest(localArray)
    },[FinalPlaylist])






function handleCollection(){

        if(pageWidth > 500){
              colRef.current.style.display = "flex"
        }

        else{
             colRef.current.style.display = "block"
        }
    }




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

