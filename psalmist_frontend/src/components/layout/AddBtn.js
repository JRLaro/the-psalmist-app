import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn direction-left" >
        
      <a
        href="#add-song-modal"
        className="btn-floating btn-large green darken-3 modal-trigger"
      >
        {" "}
        <i className="large material-icons">note_add</i>
      </a>
    </div>
  );
};

export default AddBtn;