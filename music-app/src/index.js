import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

/**
 * Playlists:
 *   each playlist can have multiple songs
 *
 *   1. Music Player
 *   2. Liked songs
 *   3. User can play the song from list of songs present in playlist or from Liked songs
 *
 * Routing:
 *
 *   /playlists => display all the playlists (4)
 *   /playlist/{playlistId} => display all the songs under the particular playlist
 *   /liked-songs => display all the songs which are liked by user
 *
 * For all the above three routes MusicPlayer is common
 *
 *  antd
 */
