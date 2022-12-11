import React, { useState } from "react";

function Modal(props) {
  const [movieName, setmovieName] = useState("");
  const handleChangemovieName = (e) => setmovieName(e.target.value);

  const [picture, setPicture] = useState("");
  const handleChangepicture = (e) => setPicture(e.target.value);

  const [description, setdescription] = useState("");
  const handleChangedescription = (e) => setdescription(e.target.value);

  return (
    <div className="modal">
      <div className="modal-body">
        <button
          onClick={() => props.setModal(false)}
          type="submit"
          className="modal-close"
        >
          X
        </button>{" "}
        <div className="modal-content">
          <input
            type="text"
            placeholder="Movie name"
            value={movieName}
            onChange={handleChangemovieName}
          />
          <input
            type="text"
            placeholder="picture"
            value={picture}
            onChange={handleChangepicture}
          />
          <input
            type="text"
            placeholder="Movie description"
            value={description}
            onChange={handleChangedescription}
          />

          <button
            onClick={() => props.addMovie(movieName, picture, description)}
          >
            Add movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
