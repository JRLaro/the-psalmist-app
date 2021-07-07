import axios from "axios";
import {
  GET_SONGS,
  GET_SONG,
  SET_LOADING,
  SONGS_ERROR,
  ADD_SONG,
  DELETE_SONG,
  UPDATE_SONG,
  SET_CURRENT,
  CLEAR_CURRENT,
  START_LOADING,
  STOP_LOADING,
} from "./types";

//get ALL songs from db.json
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

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
//get song
export const getSong = (song) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(`/new_song/${song.id}`, song, config);
    dispatch({
      type: GET_SONG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.data,
    });
  }
};

//add song
export const addSong = (song) => async (dispatch) => {
  try {
    startLoading();

    const res = await axios.post("/songs", song, config);
    // console.log(res.data);
    stopLoading();

    dispatch({
      type: ADD_SONG,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response,
    });
  }
};

//update song
export const updateSong = (song) => async (dispatch) => {
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
      payload: err.response.data,
    });
  }
};

//delete song
export const deleteSong = (id) => async (dispatch) => {
  try {
    setLoading();

    await axios.delete(`/songs/${id}`);

    dispatch({
      type: DELETE_SONG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: SONGS_ERROR,
      payload: err.response.data,
    });
  }
};

//set current song
export const setCurrent = (song) => {
  // console.log('setCurrent Fired');
  return {
    type: SET_CURRENT,
    payload: song,
  };
};

//clear current song
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//set loading --> true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
//start loading --> true
export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};
//stop loading --> false
export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};
