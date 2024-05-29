import { useDispatch, useSelector } from "react-redux";
import "../styles/music-player.scss";
import { useEffect, useRef } from "react";

export const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { isPlaying, song, imageUrl } = useSelector(
    (state) => state.playerInfo
  );
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying, song?.id]);

  if (!song) {
    return null;
  }

  return (
    <div className="music-player">
      <div className="left">
        <img src={imageUrl} alt={song.title} />
        <p>{song.title}</p>
      </div>
      <audio
        ref={audioRef}
        onPlay={() => dispatch({ type: "play" })}
        onPause={() => dispatch({ type: "pause" })}
        src={`${window.origin}/${song.fileAddress}`}
        controls
      ></audio>
      <span className="material-icons">favorite</span>
    </div>
  );
};

// localhost:3000/playlist/:id

// <img src="abc/profile.jpeg" /> => localhost:3000/playlist/abc/profile.jpeg

// localhost:3000
// <img src="abc/profile.jpeg" /> => localhost:3000/abc/profile.jpeg

// window.origin => localhost:3000 + abc/profile.jpeg

// abc.com/playlist

// abc/profile.jpeg => abc.com/playlist/abc/profile.jpeg
// abc.com/abc/profile.jpeg
