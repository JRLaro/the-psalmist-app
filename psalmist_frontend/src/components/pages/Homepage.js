import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import AddBtn from "../layout/AddBtn";
import Songs from "../../songs/Songs";
import AddSongModal from "../../songs/AddSongModal";
import EditSongModal from "../../songs/EditSongModal";
import PropTypes from "prop-types";
import { addSong } from "../../actions/songActions";

const Homepage = ({ addSong }) => {
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
    <div>
      <div className="container">
        <Songs />
        <AddBtn />
        <AddSongModal />
        <EditSongModal />
      </div>
    </div>
  );
};

// export default Homepage;
Homepage.propTypes = {
  addSong: PropTypes.func.isRequired,
};

export default connect(null, { addSong })(Homepage);
