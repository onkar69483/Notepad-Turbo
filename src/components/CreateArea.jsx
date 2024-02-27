import React, { useState } from "react";

function CreateArea(props) {
  const [area, setArea] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    console.log(setArea);
    const { name, value } = event.target;
    setArea((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }
  function handleClick(event) {
    props.addNote(area);
    setArea({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={area.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={area.content}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
