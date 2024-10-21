import axios from "axios";
const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/auth`;

export const registerUser = async ({ email, password, mobile, name }) => {
  try {
    const reqUrl = `${backendUrl}/register`;
    const response = await axios.post(reqUrl, {
      name,
      password,
      mobile,
      email,
    });
    return;
  } catch (error) {
    console.log(error);
    alert("register : Something went wrong");
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const reqUrl = `${backendUrl}/login`;
    const response = await axios.post(reqUrl, {
      password,
      email,
    });
    if (response?.data?.token) {
      localStorage.setItem("token", JSON.stringify(response.data?.token));
      localStorage.setItem("name", JSON.stringify(response.data?.name));
      localStorage.setItem("userId", JSON.stringify(response.data?.userId));
    }
    return true;
  } catch (error) {
    console.log(error);
    alert("login : Something went wrong");
  }
};
