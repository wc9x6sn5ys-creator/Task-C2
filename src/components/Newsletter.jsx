import { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }
    setMessage(`Thanks for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter" id="newsletter" aria-label="Newsletter subscription">
      <div className="newsletter-inner">
        <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="subscription-message" role="status">{message}</p>}
      </div>
    </section>
  );
}

export default Newsletter;
