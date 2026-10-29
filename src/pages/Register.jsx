
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /** @param {import("react").FormEvent<HTMLFormElement>} event */
  async function handleRegister(event) {
    event.preventDefault();
    setError("");

    const fullName = name.trim();

    if (fullName.split(/\s+/).length < 2) {
      setError("Please enter your first and last name.");
      return;
    }

    if (password.length < 6) {
      setError("Your password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await updateProfile(credential.user, {
        displayName: fullName,
      });

      await setDoc(doc(db, "users", credential.user.uid), {
        uid: credential.user.uid,
        fullName,
        email: credential.user.email,
        createdAt: serverTimestamp(),
      });

      await signOut(auth);

      navigate("/login", {
        state: {
          message: "Account created successfully. Please log in.",
        },
      });
    } catch (err) {
      console.error("Registration error:", err);

      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Please log in.");
      } else if (err.code === "auth/weak-password") {
        setError("Please choose a stronger password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Registration failed. Please check your Firebase configuration and try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Create a DEV@Deakin Account</h1>

        <form onSubmit={handleRegister}>
          <label htmlFor="register-name">Full name</label>
          <input
            id="register-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            autoComplete="name"
            required
          />

          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="new-password"
            required
          />

          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            autoComplete="new-password"
            required
          />

          {error && (
            <p className="auth-error" role="alert">{error}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create"}
          </button>
        </form>

        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;
