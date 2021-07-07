import React from "react";
import AddBtn from "../layout/AddBtn";
import Songs from "../../songs/Songs";
import AddSongModal from "../../songs/AddSongModal";
import EditSongModal from "../../songs/EditSongModal";

const Homepage = () => {

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

export default Homepage;
