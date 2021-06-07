import {
  GET_SONGS,
  SET_LOADING,
  SONGS_ERROR,
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  CLEAR_CURRENT,
  SET_CURRENT,
} from "../actions/types";

const initialState = {
  songs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SONGS:
      return {
        ...state,
        songs: payload,
        loading: false,
      };

    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, payload],
        loading: false,
      };
    case UPDATE_SONG:
      return {
        ...state,
        songs: state.songs.map(
          (song) => (song.id = payload.id ? payload : song)
        ),
        loading: false,
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.song.filter((song) => song.id !== payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        songs: payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case SONGS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
