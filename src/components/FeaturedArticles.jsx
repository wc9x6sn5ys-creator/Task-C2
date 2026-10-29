function FeaturedArticles() {
  const articles = [
    {
      title: "Getting Started with Artificial Intelligence",
      description:
        "An introduction to artificial intelligence and how intelligent systems can solve real-world problems.",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      author: "Bhavik Ahuja"
    },
    {
      title: "Introduction to Machine Learning",
      description:
        "Explore the basic concepts of machine learning and how computers can learn from data.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      author: "Bhavik Ahuja"
    },
    {
      title: "Arduino and Hardware Projects",
      description:
        "Learn how hardware components, sensors and microcontrollers can be combined to build useful projects.",
      image:
        "https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg",
      author: "Bhavik Ahuja"
    }
  ];

  return (
    <section className="articles" id="articles">
      <div className="section-container">

        <div className="section-heading">
          <h2>Featured Articles</h2>
          <p>
            Explore articles about technology, programming and
            artificial intelligence.
          </p>
        </div>

        <div className="article-container">
          {articles.map((article, index) => (
            <article className="article-card" key={index}>

              <img
                src={article.image}
                alt={article.title}
              />

              <div className="article-content">
                <h3>{article.title}</h3>

                <p>{article.description}</p>

                <div className="article-info">
                  <span>⭐ 5</span>
                  <span>{article.author}</span>
                </div>

                <button>
                  Read More
                </button>
              </div>

            </article>
          ))}
        </div>

        <div className="see-all">
          <button>See All Articles</button>
        </div>

      </div>
    </section>
  );
}

export default FeaturedArticles;