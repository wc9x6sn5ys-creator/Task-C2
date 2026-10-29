function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <section className="footer-column" aria-labelledby="footer-explore">
          <h2 id="footer-explore">Explore</h2>
          <a href="#home">Home</a>
          <a href="#questions">Questions</a>
          <a href="#articles">Articles</a>
          <a href="#tutorials">Tutorials</a>
        </section>

        <section className="footer-column" aria-labelledby="footer-support">
          <h2 id="footer-support">Support</h2>
          <a href="#faqs">FAQs</a>
          <a href="#help">Help</a>
          <a href="#contact">Contact Us</a>
        </section>

        <section className="footer-column footer-social" aria-labelledby="footer-connect">
          <h2 id="footer-connect">Stay connected</h2>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
            <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer">𝕏</a>
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">◎</a>
          </div>
        </section>
      </div>

      <div className="footer-bottom">
        <h2>DEV@Deakin 2022</h2>
        <nav className="footer-legal" aria-label="Legal links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms</a>
          <a href="#code-of-conduct">Code of Conduct</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
