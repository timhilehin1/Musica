
import Dashboard from './Components/Dashboard';
import Searchbar from './Components/SearchBar';
import Sidebar from './Components/Sidebar';
import Navigation from './Components/Navigation';
import NewReleases from './Components/NewReleases';
import Popular from './Components/Popular';
import Player from './Components/Player';
import {HashRouter as Router, Routes,  Switch, Link, Redirect, Route} from 'react-router-dom';
import Album from './Components/Album';
import {Outlet} from 'react-router';
import { useState, useRef, useEffect } from 'react';
import PlaylistPage from './Components/PlaylistPage';
import LikedPage from './Components/LikedPage';
// import { useLocation } from "react-router-dom";



function App() {


    // const activePage = window.location.pathname
    // console.log(activePage)



  const [color, changeColor] = useState("#282c34");


  const [popular, SetPopular] = useState([])
  const [newRelease, SetnewRelease] = useState([])
  const [PlaylistData, SetPlaylistData] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [IdChecker, SetIdChecker] = useState()
  const [rotate, SetRotate] = useState(true)
  const [random, SetRandom] = useState("")
  const [AllSongs, SetAllSongs] = useState([])
  const [PlaylistIndex, SetPlaylistIndex] = useState(0)
   const [Plsongs, SetPlSongs] = useState([])
   const [CollectionData, SetCollectionData] = useState()
   const[mine, setmine] = useState()
   const [playListID, setplayListID] = useState()
   const [LikedPlaylist, setLikedPlaylist] = useState([])


      const [FinalPlaylist, SetFinalPlaylist] = useState(JSON.parse(sessionStorage.getItem("data")) || [])









  useEffect(()=>{

    fetch('https://musica-api.onrender.com/new')
        .then(response => response.json())
        .then(response => SetnewRelease(response.map((item)=>{
          return {...item, like:false}
        })))
        .catch(err => console.error(err));

        },[])


        useEffect(()=>{

          fetch('https://musica-api.onrender.com/popular')
              .then(response => response.json())
              .then(response => SetPopular(response.map((item)=>{
                return {...item, like:false}
              })))
              .catch(err => console.error(err));

              },[])


              useEffect(()=>{
                fetch('https://musica-api.onrender.com/playlist')
                .then(response=>response.json())
                .then(response=>SetPlaylistData(response))
                .catch(error=>console.log(error))
              },[])


      const PlayerRef = useRef()
      const PlayBtnRef = useRef()
      const PauseBtnRef = useRef()
      const AudioRef = useRef()
      const ImageRef = useRef()
      const Appref = useRef()

    function HomePage(){
        return (

            <>
              <Searchbar/>
              <div className='dashboard-page d-flex gap-5'>

        <Navigation/>
        <Outlet/>
        </div>
        <NewReleases
        newRelease={newRelease}
        SetnewRelease={ SetnewRelease}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        IdChecker={IdChecker}
         SetIdChecker={ SetIdChecker}
        PlayBtnRef={PlayBtnRef}
        PauseBtnRef={PauseBtnRef}
        ImageRef={ImageRef}
        rotate={rotate}
        SetRotate={SetRotate}
        AudioRef={AudioRef}
        random={random}
        SetRandom={SetRandom}
        AllSongs={AllSongs}
        SetAllSongs={SetAllSongs}
        LikedPlaylist={LikedPlaylist}
        setLikedPlaylist={setLikedPlaylist}



        />

        <Popular
         popular={popular}
         SetPopular={SetPopular}
         currentSongIndex={currentSongIndex}
         setCurrentSongIndex={setCurrentSongIndex}
           IdChecker={IdChecker}
         SetIdChecker={ SetIdChecker}
         PlayBtnRef={PlayBtnRef}
        PauseBtnRef={PauseBtnRef}
         ImageRef={ImageRef}
         AudioRef={AudioRef}
         random={random}
        SetRandom={SetRandom}
        AllSongs={AllSongs}
        SetAllSongs={SetAllSongs}
        rotate={rotate}
        SetRotate={SetRotate}
        LikedPlaylist={LikedPlaylist}
        setLikedPlaylist={setLikedPlaylist}


        />
            </>
        )
    }



    function WithNav(){
        return (
            <div className='withNav'>
              <Searchbar/>
              <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Outlet/>
        </div>

            </div>
        )
    }




  return (

      <Router>

    <div ref={Appref} className="App">


          <Routes>

           <Route element={<HomePage/>}>
           <Route  path="/"  element={<Sidebar
                                      PlaylistData={PlaylistData}
                                      SetPlaylistData={SetPlaylistData}
                                      PlaylistIndex={PlaylistIndex}
                                      SetPlaylistIndex={SetPlaylistIndex}
                                      color={color}
                                      changeColor={changeColor}
                                       FinalPlaylist= {FinalPlaylist}
                                       SetFinalPlaylist = {SetFinalPlaylist}
                                       playListID={ playListID}
                                       setplayListID={setplayListID}

                                     />}/>
            </Route>

            <Route element={<WithNav/>}>

            <Route  path="/Album"  element={<Album
                                             CollectionData = {CollectionData}
                                             SetCollectionData = {SetCollectionData}
                                              FinalPlaylist= {FinalPlaylist}
                                              SetFinalPlaylist = {SetFinalPlaylist}
                                              PlaylistIndex={PlaylistIndex}
                                              SetPlaylistIndex={SetPlaylistIndex}
                                              mine={mine}
                                              setmine={setmine}
                                              newRelease={newRelease}
                                              AllSongs={AllSongs}
                                              SetAllSongs={SetAllSongs}
                                              setCurrentSongIndex={setCurrentSongIndex}
                                              rotate={rotate}
                                              SetRotate={SetRotate}
                                              AudioRef={AudioRef}
                                              PlayBtnRef={PlayBtnRef}
                                              PauseBtnRef={PauseBtnRef}

                                             />}/>
            </Route>

            <Route element={<WithNav/>}>
            <Route  path="/PlaylistPage"  element={<PlaylistPage
                                                      PlaylistData={PlaylistData}
                                                      SetPlaylistData={SetPlaylistData}
                                                      PlaylistIndex={PlaylistIndex}
                                                      SetPlaylistIndex={SetPlaylistIndex}
                                                      Appref={Appref}
                                                      AllSongs={AllSongs}
                                                      SetAllSongs={SetAllSongs}
                                                      Plsongs={Plsongs}
                                                      SetPlSongs={SetPlSongs}
                                                      currentSongIndex={currentSongIndex}
                                                      setCurrentSongIndex={setCurrentSongIndex}
                                                      AudioRef={AudioRef}
                                                      PlayBtnRef={PlayBtnRef}
                                                      PauseBtnRef={PauseBtnRef}
                                                      rotate={rotate}
                                                      SetRotate={SetRotate}
                                                      playListID={ playListID}
                                                      setplayListID={setplayListID}
                                                      />}/>
            </Route>

            <Route element={<WithNav/>}>
            <Route path="/LikedPage" element={<LikedPage/>}/>
            </Route>




    </Routes>
    <div className='footer'>
    <Player
    newRelease={newRelease}
    SetnewRelease={ SetnewRelease}
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex}
    popular={popular}
    SetPopular={SetPopular}
    IdChecker={IdChecker}
    SetIdChecker={ SetIdChecker}
    PlayBtnRef={PlayBtnRef}
    PauseBtnRef={PauseBtnRef}
    ImageRef={ImageRef}
    rotate={rotate}
    SetRotate={SetRotate}
    AudioRef={AudioRef}
    random={random}
    SetRandom={SetRandom}
    AllSongs={AllSongs}
    SetAllSongs={SetAllSongs}/>
    </div>
       </div>


</Router>
  );
}

export default App;
  {/* <Searchbar/>
     <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Sidebar/>
      </div>
 <NewReleases/>
 <Popular/> */}
