import { useState } from "react";
import "./NewPost.css";

const initialFormData = {
  questionTitle: "",
  description: "",
  articleTitle: "",
  abstract: "",
  articleText: "",
  tags: "",
};

function NewPost() {
  const [postType, setPostType] = useState("question");
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
    setErrors({});
  };

  const getTags = () =>
    formData.tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);

  const validateForm = () => {
    const nextErrors = {};
    const tags = getTags();

    if (postType === "question") {
      if (!formData.questionTitle.trim()) {
        nextErrors.questionTitle = "Please enter a question title.";
      }
      if (!formData.description.trim()) {
        nextErrors.description = "Please describe your problem.";
      }
    } else {
      if (!formData.articleTitle.trim()) {
        nextErrors.articleTitle = "Please enter an article title.";
      }
      if (!formData.abstract.trim()) {
        nextErrors.abstract = "Please enter an abstract.";
      }
      if (!formData.articleText.trim()) {
        nextErrors.articleText = "Please enter your article text.";
      }
    }

    if (tags.length > 3) {
      nextErrors.tags = "You can add a maximum of 3 tags.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      window.alert("Please correct the errors in your form.");
      return;
    }

    window.alert(
      `Your ${postType} has been validated successfully! Actual post submission will be implemented in a future task.`,
    );
  };

  const tagsCount = getTags().length;

  return (
    <main className="new-post-page">
      <section className="new-post-card" aria-labelledby="new-post-title">
        <header className="new-post-heading">
          <span className="new-post-eyebrow">DEV@Deakin Community</span>
          <h1 id="new-post-title">New Post</h1>
          <p>
            Have a question or something valuable to share? Choose your post
            type and get started.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="new-post-type-fieldset">
            <legend>Select Post Type</legend>
            <label className={postType === "question" ? "new-post-type-option selected" : "new-post-type-option"}>
              <input
                type="radio"
                name="postType"
                value="question"
                checked={postType === "question"}
                onChange={handlePostTypeChange}
              />
              <span>Question</span>
            </label>
            <label className={postType === "article" ? "new-post-type-option selected" : "new-post-type-option"}>
              <input
                type="radio"
                name="postType"
                value="article"
                checked={postType === "article"}
                onChange={handlePostTypeChange}
              />
              <span>Article</span>
            </label>
          </fieldset>

          <section className="new-post-form-section">
            <div className="new-post-section-heading">
              <h2>What do you want to ask or share?</h2>
              <p>
                {postType === "question"
                  ? "Describe your problem so the community can help."
                  : "Share your knowledge with the DEV@Deakin community."}
              </p>
            </div>

            {postType === "question" ? (
              <>
                <div className="new-post-form-group">
                  <label htmlFor="questionTitle">Title</label>
                  <input
                    id="questionTitle"
                    name="questionTitle"
                    type="text"
                    value={formData.questionTitle}
                    onChange={handleChange}
                    placeholder="Start your question with how, what, why, etc."
                    maxLength={150}
                    required
                    aria-invalid={Boolean(errors.questionTitle)}
                    aria-describedby={errors.questionTitle ? "questionTitle-error" : undefined}
                  />
                  {errors.questionTitle && <p id="questionTitle-error" className="new-post-error">{errors.questionTitle}</p>}
                </div>

                <div className="new-post-form-group">
                  <label htmlFor="description">Describe your problem</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Explain what you are trying to do and where you are stuck..."
                    rows={8}
                    maxLength={5000}
                    required
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "description-error" : undefined}
                  />
                  {errors.description && <p id="description-error" className="new-post-error">{errors.description}</p>}
                </div>
              </>
            ) : (
              <>
                <div className="new-post-form-group">
                  <label htmlFor="articleTitle">Title</label>
                  <input
                    id="articleTitle"
                    name="articleTitle"
                    type="text"
                    value={formData.articleTitle}
                    onChange={handleChange}
                    placeholder="Enter a descriptive title"
                    maxLength={150}
                    required
                    aria-invalid={Boolean(errors.articleTitle)}
                    aria-describedby={errors.articleTitle ? "articleTitle-error" : undefined}
                  />
                  {errors.articleTitle && <p id="articleTitle-error" className="new-post-error">{errors.articleTitle}</p>}
                </div>

                <div className="new-post-form-group">
                  <label htmlFor="abstract">Abstract</label>
                  <textarea
                    id="abstract"
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleChange}
                    placeholder="Enter a short, one-paragraph abstract"
                    rows={3}
                    maxLength={500}
                    required
                    aria-invalid={Boolean(errors.abstract)}
                    aria-describedby={errors.abstract ? "abstract-error" : undefined}
                  />
                  {errors.abstract && <p id="abstract-error" className="new-post-error">{errors.abstract}</p>}
                </div>

                <div className="new-post-form-group">
                  <label htmlFor="articleText">Article Text</label>
                  <textarea
                    id="articleText"
                    name="articleText"
                    value={formData.articleText}
                    onChange={handleChange}
                    placeholder="Write your article here..."
                    rows={8}
                    maxLength={10000}
                    required
                    aria-invalid={Boolean(errors.articleText)}
                    aria-describedby={errors.articleText ? "articleText-error" : undefined}
                  />
                  {errors.articleText && <p id="articleText-error" className="new-post-error">{errors.articleText}</p>}
                </div>
              </>
            )}

            <div className="new-post-form-group new-post-tags-group">
              <label htmlFor="tags">Tags</label>
              <input
                id="tags"
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Add up to 3 tags, separated by commas (e.g. Java, React)"
                maxLength={150}
                aria-invalid={Boolean(errors.tags)}
                aria-describedby={errors.tags ? "tags-error" : "tags-hint"}
              />
              <p id="tags-hint" className="new-post-field-hint">
                {tagsCount}/3 tags · Separate tags with commas.
              </p>
              {errors.tags && <p id="tags-error" className="new-post-error">{errors.tags}</p>}
            </div>
          </section>

          <div className="new-post-form-footer">
            <button type="submit" className="new-post-submit-button">
              Post <span aria-hidden="true">→</span>
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default NewPost;
