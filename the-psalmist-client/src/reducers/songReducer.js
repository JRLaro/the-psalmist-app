import {
  GET_SONGS,
  GET_SONG,
  SET_LOADING,
  SONGS_ERROR,
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  CLEAR_CURRENT,
  SET_CURRENT,
  START_LOADING,
  STOP_LOADING,
} from "../actions/types";

const initialState = {
  songs: null,
  song: {},
  current: null,
  loading: true,
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

    case GET_SONG:
      return {
        ...state,
        song: payload,
        loading: false,
        // current: payload
      };

    case ADD_SONG:
      return {
        ...state,
        songs: [...state.songs, payload],
        loading: false,
        // song: payload,
        current: payload,
      };
    case UPDATE_SONG:
      return {
        ...state,
        songs: state.songs.map((song) =>
          song.id === payload.id ? payload : song
        ),
        loading: false,
      };
    case DELETE_SONG:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== payload),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        songs: payload,
      };
    // case START_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
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
