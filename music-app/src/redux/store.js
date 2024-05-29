import { legacy_createStore } from "redux";
import playLists from "../data";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {
  playLists,
  likedSongs: {},
  playerInfo: {
    song: null,
    imageUrl: null,
    isPlaying: false,
  },
};

const reducer = (state = intialState, action) => {
  if (action.type === "update_player") {
    const { song, imageUrl } = action.payload;
    return {
      ...state,
      playerInfo: { song, imageUrl, isPlaying: true },
    };
  }
  if (action.type === "play") {
    const playerInfo = {
      ...state.playerInfo,
      isPlaying: true,
    };
    return { ...state, playerInfo };
  }
  if (action.type === "pause") {
    const playerInfo = {
      ...state.playerInfo,
      isPlaying: false,
    };
    return { ...state, playerInfo };
  }
  return state;
};

const store = legacy_createStore(reducer, composeWithDevTools());
export default store;
