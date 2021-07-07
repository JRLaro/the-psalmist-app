import React, { useEffect } from "react";
import { connect } from "react-redux";
import SongItem from "./SongItem";
import PropTypes from "prop-types";
import { getSongs } from "../actions/songActions";
import PreLoader from "../components/layout/PreLoader";

const Songs = ({ song: { songs, loading }, getSongs }) => {
  useEffect(() => {
    getSongs();
    //eslint-disable-next-line
  }, []);

  if (loading || songs === null) {
    return <PreLoader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Songs</h4>
      </li>
      {!loading && songs.length === 0 ? (
        <>
          <p className="center">Psalm 96:
          "Sing a new song..."</p>
          <div style={{ marginLeft: "48%", paddingBottom: "5%" }}>
            <a
              href="#add-song-modal"
              className="btn-floating green darken-1 modal-trigger"
            >
              <i className="material-icons">note_add</i>
            </a>
          </div>
        </>
      ) : (
        songs.map((song) => <SongItem song={song} key={song.id} />)
      )}
    </ul>
  );
};

Songs.propTypes = {
  song: PropTypes.object.isRequired,
  getSongs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  song: state.song,
});

export default connect(mapStateToProps, { getSongs })(Songs);
