
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



function App() {
  const [popular, SetPopular] = useState([])
  const [newRelease, SetnewRelease] = useState([])
  const [Playlist, SetPlaylist] = useState([])
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [IdChecker, SetIdChecker] = useState()
  const [rotate, SetRotate] = useState(true)
  const [random, SetRandom] = useState("")
  const [AllSongs, SetAllSongs] = useState([])


  useEffect(()=>{

    fetch('https://musica-api.up.railway.app/new')
        .then(response => response.json())
        .then(response => SetnewRelease(response))
        .catch(err => console.error(err));

        },[])

        useEffect(()=>{

          fetch('https://musica-api.up.railway.app/popular')
              .then(response => response.json())
              .then(response => SetPopular(response))
              .catch(err => console.error(err));
                //  SetAllSongs(newRelease)
              },[])


              useEffect(()=>{
                fetch('https://musica-api.up.railway.app/playlist')
                .then(response=>response.json())
                .then(response=>SetPlaylist(response))
                .catch(error=>console.log(error))
              },[])
          // useEffect(()=>{
          //   SetAllSongs(newRelease)
          // })
        

      
      const PlayerRef = useRef()
      const PlayBtnRef = useRef()
      const PauseBtnRef = useRef()
      const AudioRef = useRef()
      const ImageRef = useRef()

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
        //   PlayerData={PlayerData}
        // SetPlayerData={SetPlayerData}

        />
            </>
        )
    }


    function WithoutNav(){
        return (
            <>
            <Outlet/>
            </>
        )
    }

    function WithNav(){
        return (
            <>
              <Searchbar/>
              <div className='dashboard-page d-flex gap-5'>
        <Navigation/>
        <Outlet/>
        </div>
            </>
        )
    }




  return (

      <Router>

    <div className="App">
    {/* <Dashboard/> */}

          <Routes>

           <Route element={<HomePage/>}>
           <Route  path="/"  element={<Sidebar
                                      Playlist={Playlist}
                                      SetPlaylist={SetPlaylist}/>}/>
            </Route>

            <Route element={<WithNav/>}>
            <Route  path="/Album"  element={<Album/>}/>
            </Route>

            <Route element={<WithNav/>}>
            <Route  path="/PlaylistPage"  element={<PlaylistPage/>}/>
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
