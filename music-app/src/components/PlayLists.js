import { useSelector } from "react-redux";
import "../styles/playlist.scss";
import { useNavigate } from "react-router-dom";

export const PlayLists = () => {
  const playLists = useSelector((state) => state.playLists);
  const navigate = useNavigate();

  const onClickCard = (playListId) => {
    // /playlist/{playListId}
    navigate(`/playlist/${playListId}`);
  };

  return (
    <div className="playlists-container">
      {playLists.map((playlist) => {
        return (
          <div
            key={playlist.id}
            className="card"
            onClick={() => onClickCard(playlist.id)}
          >
            <img src={playlist.displayPicture} alt={playlist.name} />
            <div style={{ padding: 10 }}>
              <b>{playlist.name}</b>
              <p>{playlist.releaseDate}</p>
              <div className="bottom-box">
                <span className="material-icons">queue_music</span>
                <span>{playlist.songs.length}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
