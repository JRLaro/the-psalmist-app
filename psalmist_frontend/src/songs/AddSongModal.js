import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { addSong } from "../actions/songActions";
import { Link, Redirect, useHistory } from "react-router-dom";

const AddSongModal = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { loading, current } = useSelector((state) => state.song);

let history = useHistory()
  console.log(current);
  // console.log(loading);

  // useEffect(() => {
  //   if (!loading) {
  //      console.log('redirecting');
  //   }
  // }, [loading]);

  const onSubmit = (e) => {
    // e.preventDefault();

    if (title === "") {
      M.toast({ html: "What is the title of your Song?" });
    } else {
      const newSong = {
        title,
        date: new Date(),
      };

      dispatch(addSong(newSong));

      // //clear fields
      // setTitle("");

history.push('/new_song')
      // location.assign(`/new_song/${current.id}`);
      // <Redirect to="/new_song" />;
      // <Redirect to={{
      //   pathname:"/new_song/:id"}} />;
      console.log("redirect to newSong page");
    }
  };

  return (
    <div
      id="add-song-modal"
      className="modal"
      style={{ width: "25%", height: "auto" }}
    >
      <div className="modal-content">
        <h4 className="center">New Song</h4>
        <br />
        <div className="row">
            <label htmlFor="title" className='active'>
              Song Title
            </label>
          <div className="input-field">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          onClick={onSubmit}
          className={
            title
              ? "modal-close waves-effect green btn"
              : "waves-effect green btn"
          }
        >
          ENTER
        </a>
        {/* <Link
          to={title ? "/new_song/:id" : "#!"}
          onClick={onSubmit}
          className={
            title
              ? "modal-close waves-effect green btn"
              : "waves-effect green btn"
          }
        >
          ENTER
        </Link> */}
      </div>
    </div>
  );
};

AddSongModal.propTypes = {
  addSong: PropTypes.func.isRequired,
};

export default connect(null, { addSong })(AddSongModal);
