import PropTypes from "prop-types";
import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteSong, setCurrent } from "../actions/songActions";
import M from "materialize-css/dist/js/materialize.min.js";

const SongItem = ({ song, deleteSong, setCurrent }) => {
  const onDelete = () => {
    deleteSong(song.id);
    M.toast({ html: "Song has been deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-song-modal"
          className={`modal-trigger ${song.title ? "red-text" : "green-text"}`}
          onClick={() => setCurrent(song)}
          rel="noreferrer"
        >
          {song.title}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID#{song.id}:</span> last updated
          <Moment format="MMMM Do YYYY, h:mm:ss a">{song.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

SongItem.propTypes = {
  song: PropTypes.object.isRequired,
  deleteSong: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteSong, setCurrent })(SongItem);
