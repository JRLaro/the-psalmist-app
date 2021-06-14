import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
import { addSong } from "../../actions/songActions";

const NewSong = ({ addSong }) => {
  const [intro, setIntro] = useState("");
  const [verse, setVerse] = useState("");
  const [chorus, setChorus] = useState("");

    const onSubmit = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
        
    const newSong = {
      intro,
      verse,
      chorus,
      date: new Date(),
    };

    addSong(newSong);

    //clear fields
    setIntro("");
    setVerse("");
    setChorus("");
  };

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
          <div className="container">
              <a href="/home"><button>Home</button></a>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        {/* <a href="/home"> */}
          <button onClick={onSubmit}>Save Song</button>
        {/* </a> */}
      </div>
    </div>
  );
};

NewSong.propTypes = {
  addSong: PropTypes.func.isRequired,
};

export default connect(null, { addSong })(NewSong);
