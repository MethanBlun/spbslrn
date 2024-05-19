import { useState } from "react";
export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Remplissez tous les champs correctement");
      return;
    }
    console.log(title, rating, method);
  };

  return (
    <div className="create-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="title">Title:</label>
        <input
          className="form-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="form-label" htmlFor="method">Method:</label>
        <textarea
          className="form-textarea"
          value={method}
          id="method"
          onChange={(e) => setMethod(e.target.value)}
        ></textarea>
        <label className="form-label" htmlFor="rating">Rating:</label>
        <input
          className="form-input"
          type="text"
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button className="form-button">Create Things</button>
        {formError && <p className="form-error">{formError}</p>}
      </form>
    </div>
  );
}
