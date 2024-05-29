import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { MusicPlayer } from "./components/MusicPlayer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { PlayLists } from "./components/PlayLists";
import { SongsList } from "./components/SongsList";
import { LikedSongs } from "./components/LikedSongs";
import { Sidebar } from "./components/Sidebar";
import { PlayList } from "./components/PlayList";

const PlayerLayout = () => {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
      <MusicPlayer />
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<PlayerLayout />}>
            <Route path="/playlists" element={<PlayLists />} />
            <Route path="/playlist/:playListId" element={<PlayList />} />
            <Route path="/liked-songs" element={<LikedSongs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
