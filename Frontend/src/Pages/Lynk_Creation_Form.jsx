import axios from "axios";
import { useNavigate } from "react-router-dom";

const Lynk_Creation_Form = () => {
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();

    const formdata = new FormData(e.target);

    axios
      .post("http://localhost:3000/Lynk_it", formdata)
      .then(() => {
        navigate("/Profile");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <section className="create-post-section">
      <div className="create-post-container">
        <h1 className="create-post-title">Create Post</h1>

        <form className="create-post-form" onSubmit={handlesubmit}>
          <div className="form-group">
            <label className="form-label">Image</label>
            <input
              className="form-input form-file"
              type="file"
              name="image"
              accept="image/*"
            />
          </div>

          <div className="form-group">
            <label className="form-label">URL</label>
            <input
              className="form-input"
              type="text"
              name="url"
              required
              placeholder="Enter URL..."
            />
          </div>

          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              className="form-input"
              type="text"
              name="title"
              required
              placeholder="Enter title..."
            />
          </div>

          <button className="create-post-button" type="submit">
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default Lynk_Creation_Form;
