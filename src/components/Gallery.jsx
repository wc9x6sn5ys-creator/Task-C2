function Gallery() {
  const images = [
    {
      src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      alt: "Programming workspace"
    },
    {
      src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      alt: "Developer working"
    },
    {
      src: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      alt: "Technology workspace"
    },
    {
      src: "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg",
      alt: "Electronic hardware project"
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="section-container">

        <div className="section-heading">
          <h2>Gallery</h2>
          <p>
            A collection of technology, programming and project moments.
          </p>
        </div>

        <div className="gallery-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;