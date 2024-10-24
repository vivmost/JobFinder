import React, { useState } from "react";
import styles from "./Login.module.css";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "guest@gmail.com",
    password: "guest@123",
  });

  const handleFormChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      alert("Fields can't be empty");
      return;
    }

    const result = await loginUser(formData);
    if (result) {
      navigate("/");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Already have an account ?</h1>
      <input
        className={styles.input}
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        type={"email"}
        placeholder="Email"
      ></input>
      <input
        className={styles.input}
        name="password"
        value={formData.password}
        onChange={handleFormChange}
        type={"password"}
        placeholder="password"
      ></input>
      <button onClick={handleSubmit} className={styles.button}>
        Sign in
      </button>
      <p className={styles.footer}>
        Don&apos;t have an account?
        <span
          className={styles.underline}
          onClick={() => navigate("/register")}
        >
          Sign Up
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
