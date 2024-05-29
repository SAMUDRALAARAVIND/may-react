import { useDispatch, useSelector } from "react-redux";
import "../styles/songs-list.scss";

export const SongsList = ({ songs, imageUrl }) => {
  const { song: playerSong, isPlaying } = useSelector(
    (state) => state.playerInfo
  );

  const dispatch = useDispatch();

  const playPauseSong = (song) => {
    dispatch({ type: "update_player", payload: { song, imageUrl } });
  };

  const pauseSong = () => {
    dispatch({ type: "pause" });
  };

  return (
    <div className="songs-list">
      {songs.map((song, index) => {
        const currentSongPlaying = playerSong?.id === song?.id && isPlaying;

        return (
          <div className="song-card" key={song.id}>
            <div style={{ minWidth: 20 }}>
              {currentSongPlaying ? (
                <button className="icon material-icons" onClick={pauseSong}>
                  pause
                </button>
              ) : (
                <>
                  <span className="count">{index + 1}</span>
                  <button
                    className="material-icons play-btn icon"
                    onClick={() => playPauseSong(song)}
                  >
                    play_arrow
                  </button>
                </>
              )}
            </div>
            <img src={imageUrl} alt={song.title} />
            <p>{song.title}</p>
            <button className="material-icons icon">favorite</button>
          </div>
        );
      })}
    </div>
  );
};

// Playlist => render list songs
// LikedSongs => render list songs
