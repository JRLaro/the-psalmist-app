import axios from "axios";
import {
  GET_SONGS,
  SET_LOADING,
  SONGS_ERROR,
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

//get song from db.json
export const getSongs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get("/songs");
    dispatch({
      type: GET_SONGS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.data,
    });
  }
};

//add songs
export const addSong = (song) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    setLoading();

    const res = await axios.post("/songs", song, config);

    dispatch({
      type: ADD_SONG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//update song
export const updateSong = (song) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    setLoading();

    const res = await axios.put(`/songs/${song.id}`, song, config);

    dispatch({
      type: UPDATE_SONG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//delete song
export const deleteSong = (id) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.delete(`/songs/${id}`);

    dispatch({
      type: DELETE_SONG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set current song
export const setCurrent = (song) => {
  return {
    type: SET_CURRENT,
    payload: song
  }
}

//clear current song
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  }
}


//set loading --> true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
