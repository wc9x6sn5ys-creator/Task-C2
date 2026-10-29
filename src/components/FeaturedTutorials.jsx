function FeaturedTutorials() {
  const tutorials = [
    {
      title: "Python for Beginners",
      description:
        "Learn the fundamentals of Python programming and start building useful applications.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      author: "Bhavik Ahuja"
    },
    {
      title: "Getting Started with C++",
      description:
        "Understand the fundamentals of C++ programming and object-oriented development.",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      author: "Bhavik Ahuja"
    },
    {
      title: "Arduino Projects",
      description:
        "Discover how Arduino can be used with sensors, motors and other electronic components.",
      image:
        "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg",
      author: "Bhavik Ahuja"
    }
  ];

  return (
    <section className="tutorials" id="tutorials">
      <div className="section-container">

        <div className="section-heading">
          <h2>Featured Tutorials</h2>
          <p>
            Learn programming and technology through practical tutorials.
          </p>
        </div>

        <div className="tutorial-container">
          {tutorials.map((tutorial, index) => (
            <article className="tutorial-card" key={index}>

              <img
                src={tutorial.image}
                alt={tutorial.title}
              />

              <div className="tutorial-content">
                <h3>{tutorial.title}</h3>

                <p>{tutorial.description}</p>

                <div className="tutorial-info">
                  <span>⭐ 5</span>
                  <span>{tutorial.author}</span>
                </div>

                <button>
                  Start Tutorial
                </button>
              </div>

            </article>
          ))}
        </div>

        <div className="see-all">
          <button>See All Tutorials</button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedTutorials;