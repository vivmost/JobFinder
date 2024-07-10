import React, { useState } from "react";
import { registerUser } from "../../api/auth";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });
  const [isFormChecked, setIsFormChecked] = useState(true);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.email ||
      !formData.password ||
      !formData.name ||
      !formData.mobile
    ) {
      alert("Fields can't be empty");
      return;
    }

    if (!isFormChecked) {
      alert("Please accept T&C");
      return;
    }

    await registerUser(formData);
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Create an account</h1>
      <h2 className={styles.h2}>Your personal job finder is here</h2>
      <input
        className={styles.input}
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Name"
      ></input>
      <input
        className={styles.input}
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="mobile"
        onChange={handleChange}
        type="tel"
        placeholder="Mobile"
      ></input>
      <input
        className={styles.input}
        name="password"
        onChange={handleChange}
        type="password"
        placeholder="Password"
      ></input>
      <input
        name="checkbox"
        style={{ accentColor: "#17A2B8" }}
        type="checkbox"
        checked={isFormChecked}
        onChange={(event) => setIsFormChecked(event.target.checked)}
        id="confirm"
      />
      <label
        className={styles.grey}
        style={{ fontSize: "12px" }}
        htmlFor="confirm"
      >
        By creating an account, I agree to our terms of use and privacy policy
      </label>
      <button onClick={handleSubmit} className={styles.button}>
        Create Account
      </button>
      <p className={styles.footer}>
        <span className={styles.grey}>Already have an account?</span>
        <span className={styles.underline} onClick={() => navigate("/login")}>
          Sign in
        </span>
      </p>
      <p className={styles.footer}>
        <span className={styles.grey}>Want to checkout Jobs?</span>
        <span className={styles.underline} onClick={() => navigate("/")}>
          Home
        </span>
      </p>
    </div>
  );
}
