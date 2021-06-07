import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { addSong } from "../actions/songActions";

const AddSongModal = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [verse, setVerse] = useState("");
  const [chorus, setChorus] = useState("");

  const onSubmit = () => {
    if (title === "") {
      M.toast({ html: "What is the title of your Song?" });
    } else {
      const newSong = {
        title,
        intro,
        verse,
        chorus,
        date: new Date(),
      };

      addSong(newSong);
      M.toast({ html: `${title} was added` });

      //clear fields
      setTitle("");
      setIntro("");
      setVerse("");
      setChorus("");
    }
  };

  return (
    <div
      id="add-song-modal"
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
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect green btn"
        >
          {" "}
          ENTER
        </a>
      </div>
    </div>
  );
};

AddSongModal.propTypes = {
  addSong: PropTypes.func.isRequired,
};

export default connect(null, { addSong })(AddSongModal);
