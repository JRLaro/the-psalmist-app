import React, { useRef, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import PropTypes from "prop-types";
import { addSong, getSong } from "../../actions/songActions";

const NewSong = ({ song: { current, song }, addSong, getSong }) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    try {
      if (current) {
        await dispatch(getSong(current));
        // console.log(song);
        console.log(current);
      } else {
        console.log("current is empty");
      }

      // console.log(current);
    } catch (error) {
      console.log(error);
    }

    // if (current) {
    //   getSong(current);
    // } else {
    //   return (<div>This is no current song</div>);
    //   console.log("current is empty");
    // }
    // getSong(current);
  }, [current]);

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
      {current ? (
        <div className="container">
          <h2>Song Title: {current.title}</h2>
          <h5>Song ID: {current.id}</h5>
          <a href="/home">
            <button>Home</button>
          </a>
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

              selector: "textarea",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <a href="#!">
            <button onClick={onSubmit}>Save Song</button>
          </a>
        </div>
      ) : (
        <div>
          <button>
            <a href="/home">Home</a>
          </button>
          There is no data in current
        </div>
      )}
        
    </div>
  );
};

NewSong.propTypes = {
  addSong: PropTypes.func.isRequired,
  getSong: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  song: state.song,
});

export default connect(mapStateToProps, { addSong, getSong })(NewSong);
