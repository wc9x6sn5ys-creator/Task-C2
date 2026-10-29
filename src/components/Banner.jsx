function Banner() {
  return (
    <section className="banner" id="home">
      <div className="banner-overlay">
        <div className="banner-content">
          <p className="banner-small-text">
            Welcome to my website
          </p>

          <h1>
            Hey, I'm Bhavik
          </h1>

          <p>
            Artificial Intelligence and Machine Learning student
            passionate about technology, programming and intelligent systems.
          </p>

          <a href="#about" className="banner-button">
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;