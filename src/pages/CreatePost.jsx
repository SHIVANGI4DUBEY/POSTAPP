/*import React from 'react'

function CreatePost() {
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form>
            <input type="file" name="image" accept="image/"/>
            <input type="text" name="caption" placeholder='Enter Caption ' required />
            <button type="Submit">Submit</button>
        </form>

    </section>
  )
}

export default CreatePost
*/
import React, { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
     const res = await axios.post(
  "https://postapp-backend-uuks.onrender.com/create-post",
  formData
);

      console.log(res.data);
      alert("Post created successfully!");

      // reset
      setImage(null);
      setCaption("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="create-post-section">
      <form onSubmit={handleSubmit}>
        <h1>Create Post</h1>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <input
          type="text"
          placeholder="Enter Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CreatePost;