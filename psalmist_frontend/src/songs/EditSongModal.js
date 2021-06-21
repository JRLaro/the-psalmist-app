import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { updateSong } from "../actions/songActions";
import { Redirect } from "react-router-dom";

const EditSongModal = ({ current, updateSong }) => {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [verse, setVerse] = useState("");
  const [chorus, setChorus] = useState("");

  useEffect(() => {
    if (current) {
      setTitle(current.title);
      // setIntro(current.intro);
      // setVerse(current.verse);
      // setChorus(current.chorus);
    }
  }, [current]);

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "What is the title of your Song?" });
    } else {
      const updSong = {
        id: current.id,
        title,
        intro,
        verse,
        chorus,
        date: new Date(),
      };

      updateSong(updSong);
      M.toast({ html: `${title} was updated` });

      //clear fields
      setTitle("");
      setIntro("");
      setVerse("");
      setChorus("");

      <Redirect to="/new_song" />
    }
  };

  return (
    <div
      id="edit-song-modal"
      className="modal"
      style={{ width: "50%", height: "auto" }}
    >
      <div className="modal-content">
        <h4>Songs</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="title" className="active">
              Song Title
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="intro"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
            <label htmlFor="intro" className="active">
              Intro
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="verse"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            />
            <label htmlFor="verse" className="active">
              Verse
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="chorus"
              value={chorus}
              onChange={(e) => setChorus(e.target.value)}
            />
            <label htmlFor="chorus" className="active">
              Chorus
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          onClick={onSubmit}
          className="modal-close waves-effect green btn"
        >
          ENTER
        </a>
      </div>
    </div>
  );
};
EditSongModal.propTypes = {
  updateSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.song.current,
});

export default connect(mapStateToProps, { updateSong })(EditSongModal);
