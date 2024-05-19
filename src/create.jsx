import { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState("");
const hangleSubmit = async(e) => {
    e.preventDefault()

    if (!title || !method || !rating){
        setFormError('remplie tout les champs correctement')
        return
    }
    console.log(title,rating,method)
}
  return (
    <div>
      <form onSubmit={hangleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="method">Method:</label>
        <textarea
          value={method}
          id="method"
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>

        <label htmlFor="rating"> </label>
        <input
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button> create things</button>
        {formError && <p>{formError}</p>}
      </form>
    </div>
  );
}
