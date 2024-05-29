import { Result } from "antd";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SongsList } from "./SongsList";

export const PlayList = () => {
  const playListId = Number(useParams().playListId);

  const playList = useSelector((state) => {
    const selectedPlayList = state.playLists.filter(
      (playList) => playList.id === playListId
    );
    return selectedPlayList.length ? selectedPlayList[0] : null;
  });

  if (!playList) {
    return (
      <Result
        status="404"
        title="404"
        subTitle={<p>The playlist you're looking for is not available</p>}
        extra={<Link to="/playlists">Go to playlists</Link>}
      />
    );
  }

  return (
    <div style={{ overflow: "scroll" }}>
      <SongsList imageUrl={playList.displayPicture} songs={playList.songs} />
    </div>
  );
};
